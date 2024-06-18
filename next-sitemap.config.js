/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://iiitdwd.ac.in',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/faculty/*" },
            { userAgent: "*", disallow: "/events/*" },
            { userAgent: "*", allow: "/" },
        ],
    },
    exclude: ["/faculty/*", "/events/*"],
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: 1 - (path.split('/').length - 1) / 10,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
}
