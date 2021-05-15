// const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
// const { linkResolver } = require("./src/utils/linkResolver")

// registerLinkResolver(linkResolver)

module.exports = {
  linkResolver(doc) {
    if (doc.type == 'NewsEvent') {
      return `/news-events/${doc.uid}`;
    }
    return '/';
  },
}
