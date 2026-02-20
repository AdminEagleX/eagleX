module.exports = {
    siteUrl: 'https://eaglex.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/private/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/'],
            },
        ],
    },
}
