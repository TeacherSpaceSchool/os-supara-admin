const withSass = require('@zeit/next-sass')
const sitemap = require('nextjs-sitemap-generator');
const withOffline = require('next-offline')
sitemap({
    baseUrl: 'https://azyk.store',
    pagesDirectory: __dirname + '/pages',
    targetDirectory : 'static/'
});
module.exports =
    withOffline(
        withSass({
            env: {
                URL: process.env.URL
            },
            webpack: (config) => {
                return config
            },
            exportPathMap: function() {
                return {
                    '/': { page: '/' },
                    '/ads': { page: '/ads' },
                    '/blog': { page: '/blog' },
                    '/organizations': { page: '/organizations' },
                    '/organization/[id]': { page: '/organization/[id]' },
                    '/subcategory/[id]': { page: '/subcategory/[id]' },
                    '/client/[id]': { page: '/client/[id]' },
                    '/employment/[id]': { page: '/employment/[id]' },
                    '/item/[id]': { page: '/item/[id]' },
                    '/items/[id]': { page: '/items/[id]' },
                    '/route/[id]': { page: '/route/[id]' },
                    'basket': {page: '/basket' },
                    'clients': { page: '/clients' },
                    'contact': { page: '/contact' },
                    'employments': { page: '/employments' },
                    'favorite': { page: '/favorite' },
                    'notification': { page: '/notification' },
                    'orders': { page: '/orders' },
                    'organizations': { page: '/organizations' },
                    'routes': { page: '/routes' },
                };
            }
        })
    )