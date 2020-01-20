import { getProfile } from '../redux/actions/user'
import { setClient } from '../src/gql/client'
import { checkAuth } from '../src/lib'
import uaParserJs from 'ua-parser-js';
import { getClientGqlSsr } from '../src/getClientGQL'

export default async (ctx)=>{
    if (ctx.req) {
        //new SingletonApolloClient(ctx.req)

        let ua = uaParserJs(ctx.req.headers['user-agent'])
        ctx.store.getState().app.isMobileApp = ['mobile', 'tablet'].includes(ua.device.type)
        ctx.store.getState().user.authenticated = checkAuth(ctx.req.headers.cookie)
        if (ctx.store.getState().user.authenticated) {
            ctx.store.getState().user.profile = await getProfile(await getClientGqlSsr(ctx.req))
            if (ctx.store.getState().user.profile.client) {
                setClient({
                    _id: ctx.store.getState().user.profile.client,
                    device: `${ua.device.vendor ? `${ua.device.vendor}-` : ''}${ua.device.model ? ua.device.model : ''} | ${ua.os.name ? `${ua.os.name}-` : ''}${ua.os.version ? ua.os.version : ''} | ${ua.browser.name ? `${ua.browser.name}-` : ''}${ua.browser.version ? ua.browser.version : ''}`
                }, await getClientGqlSsr(ctx.req))
            }
        } else {
            ctx.store.getState().user.profile = {}
        }
    }
    ctx.store.getState().app.search = ''
    ctx.store.getState().app.sort = '-createdAt'
    ctx.store.getState().app.filter = ''
    ctx.store.getState().app.date = ''
    ctx.store.getState().app.load = false
    ctx.store.getState().mini_dialog.show = false
    ctx.store.getState().pagination.work = false

}