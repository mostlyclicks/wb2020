import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="block">
      <div className="columns">
        <div className="column is-two-thirds">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
        <div className="column">
          <p>Right Column</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
