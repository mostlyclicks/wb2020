import React from "react"
import PropTypes from "prop-types"

require('dotenv').config({
  path: `../.env`,
})

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@0/dist/algoliasearchNetlify.css" />

        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@0/dist/algoliasearchNetlify.js"></script>
        <script 
          dangerouslySetInnerHTML={{
            __html: `
          algoliasearchNetlify({
            appId: 'C0PMZKKUSZ',
            apiKey: 'be2200e8fddb7c475fb94849fca045da',
            
            siteId: '24415d23-86bc-4bfe-b767-1a678466cc9c',
            branch: 'master',
            autocomplete: {
              inputSelector: 'input[type=search]',
            },
          });`
        }}
       />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
