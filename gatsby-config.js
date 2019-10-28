module.exports = {
  siteMetadata: {
    title: `Skills Fund`,
    description: `Skills Fund finances students to attend the best training programs around. We believe in 100% loan transparency, and have aligned all incentives around student success.`,
    headline: `Partner financing page for Skills Fund and Smith & Solomon`,
    author: `@Skills_Fund`,
    siteLanguage: `en`,
    logo: `src/images/skillsFund_logo.png`,
    favicon: `src/images/Favicon-SF.png`,
    keywords: `vocational training loan, truck school loan, CDL license loan, skills training, financing, truck driving, truck driving school`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-zopfli'
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       "UA-68312423-1"
    //     ],
    //     gtagConfig: {
    //       cookie_domain: "auto"
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/Favicon-SF.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
