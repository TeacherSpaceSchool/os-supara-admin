import { getProfile } from '../redux/actions/user'
import { checkAuth, checkMobile } from '../src/lib'
import uaParserJs from 'ua-parser-js';
import { getClientGqlSsr } from '../src/getClientGQL'

export default async (ctx)=>{
    console.log(`initialApp.js${1}`)
    if (ctx.req) {
        console.log(`req_initialApp.js${1}`)
        let ua = uaParserJs(ctx.req.headers['user-agent'])
        console.log(`req_initialApp.js${2}`)
        ctx.store.getState().app.isMobileApp = ['mobile', 'tablet'].includes(ua.device.type)||checkMobile(ua.ua)
        console.log(`req_initialApp.js${3}`)
        ctx.store.getState().user.authenticated = checkAuth(ctx.req.headers.cookie)
        console.log(`req_initialApp.js${4}`)
        if (ctx.store.getState().user.authenticated) {
            console.log(`authenticated_req_initialApp.js${1}`)
            ctx.store.getState().user.profile = await getProfile(await getClientGqlSsr(ctx.req))
            console.log(`authenticated_req_initialApp.js${2}`)
        }
        else {
            ctx.store.getState().user.profile = {}
        }
        console.log(`req_initialApp.js${5}`)
    }
    console.log(`initialApp.js${2}`)
    ctx.store.getState().app.search = ''
    ctx.store.getState().app.sort = '-createdAt'
    ctx.store.getState().app.filter = ''
    ctx.store.getState().app.date = ''
    ctx.store.getState().app.load = false
    ctx.store.getState().app.drawer = false
    ctx.store.getState().mini_dialog.show = false
    ctx.store.getState().mini_dialog.showFull = false
    console.log(`initialApp.js${3}`)

}