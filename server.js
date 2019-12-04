const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')
console.log(process.env.URL.trim()!=='azyk.store')
const app = next({ dev: process.env.URL.trim()!=='azyk.store' })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        createServer((req, res) => {
            const parsedUrl = parse(req.url, true)
            const { pathname } = parsedUrl

            if (pathname === '/service-worker.js') {
                const filePath = join(__dirname, '.next', pathname)

                app.serveStatic(req, res, filePath)
            } else {
                handle(req, res, parsedUrl)
            }
        })
            .listen(process.env.URL.trim()==='azyk.store'?5000:80)
    })