import { getProfile } from '../redux/actions/user'
import { checkAuth, checkMobile } from '../src/lib'
import uaParserJs from 'ua-parser-js';
import { getClientGqlSsr } from '../src/getClientGQL'

export default async (ctx)=>{
    if (ctx.req) {
        console.log(`ctx.req${1}`)
        let ua = uaParserJs(ctx.req.headers['user-agent'])
        console.log(`ctx.req${2}`)
        ctx.store.getState().app.isMobileApp = ['mobile', 'tablet'].includes(ua.device.type)||checkMobile(ua.ua)
        console.log(`ctx.req${3}`)
        ctx.store.getState().user.authenticated = checkAuth(ctx.req.headers.cookie)
        console.log(`ctx.req${4}`)
        if (ctx.store.getState().user.authenticated) {
            console.log(`ctx.req${5.1}`)
            ctx.store.getState().user.profile = await getProfile(await getClientGqlSsr(ctx.req))
            console.log(`ctx.req${5.1}`)
        }
        else {
            console.log(`ctx.req${5.2}`)
            ctx.store.getState().user.profile = {}
            console.log(`ctx.req${5.2}`)
        }
    }
    ctx.store.getState().app.search = ''
    ctx.store.getState().app.sort = '-createdAt'
    ctx.store.getState().app.filter = ''
    ctx.store.getState().app.date = ''
    ctx.store.getState().app.load = false
    ctx.store.getState().app.drawer = false
    ctx.store.getState().mini_dialog.show = false
    ctx.store.getState().mini_dialog.showFull = false
}