module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: `Zale's portfolio`, // Navigation and Site Title
  siteTitleAlt: `Zale's portfolio`, // Alternative Site title for SEO
  siteTitleShort: 'ZaleP', // short_name for manifest
  siteHeadline: `Zale's portfolio`, // Headline for schema.org JSONLD
  siteUrl: 'https://zale-portfolio.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'zh-CN', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: `Zale's portfolio`,
  author: 'Zale', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@emilia', // Twitter Username
  // ogSiteName: 'emilia', // Facebook Site Name
  ogLanguage: 'zh-CN', // og:language
  // googleAnalyticsID: 'UA-47519312-4',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Your information
  avatar: '/logos/lekoarts.png',
  name: 'Zale',
  location: 'Photography portfolio',
  socialMedia: [
    // {
    //   url: 'https://twitter.com/lekoarts_de',
    //   name: 'Twitter',
    // },
    // {
    //   url: 'https://www.instagram.com/lekoarts.de',
    //   name: 'Instagram',
    // },
    // {
    //   url: 'https://www.lekoarts.de/en',
    //   name: 'Homepage',
    // },
  ],
}
