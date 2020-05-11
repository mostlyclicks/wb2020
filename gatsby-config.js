module.exports = {
  siteMetadata: {
    title: `WB 2020 Static`,
    description: `Wieser Brothers General Contracting | Design/Build, Project management, General Construction.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Firm",
        link: "/firm",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Commitment",
        link: "/commitment",
      },
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "News & Events",
        link: "/news-events",
      },
      // {
      //   name: "Employee Login",
      //   link: "/employee-login",
      // },
      // {
      //   name: "Plan Room",
      //   link: "/plan-room",
      // },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "wb2020", // required
        defaultLang: "en-us", // optional, but recommended
        pages: [{
          type: 'Project',
          match: '/projects/:uid',
          path: '/project',
          component: require.resolve('./src/templates/project.js')
        }],
        //accessToken:
           // optional
        // prismicRef: '...', // optional, default: master; useful for A/B experiments
        // path: '/preview', // optional, default: /preview
        //previews: true, // optional, default: false
        // pages: [{ // optional
        //   type: 'Article', // TypeName from prismic
        //   match: '/article/:uid', // pages will be generated under this pattern (optional)
        //   path: '/article', // placeholder page for unpublished documents
        //   component: require.resolve('./src/templates/article.js'),
        //   sortBy: 'date_ASC', // optional, default: meta_lastPublicationDate_ASC; useful for pagination
        // }],
        // extraPageFields: 'article_type', // optional, extends pages query to pass extra fields
        //sharpKeys: [
          // /image|photo|picture/, // (default)
         //"profilepic",
       // ],
      },
    },

    {
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
        height: 400, // Optional: Overrides optional.ratio
        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
        urlOverrides: [
          {
            id: "youtube",
            embedURL: videoId =>
              `https://www.youtube-nocookie.com/embed/${videoId}`,
          },
        ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Muli`,
            variants: [`700`, `900`],
          },
          
          {
            family: `IBM Plex Serif`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
            variants: ["400", "400i", "700", "700i"],
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
