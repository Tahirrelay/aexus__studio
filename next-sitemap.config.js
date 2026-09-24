/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aexusstudios.com',
  generateRobotsTxt: true,
  exclude: ['/Home', '/thank-you'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
}