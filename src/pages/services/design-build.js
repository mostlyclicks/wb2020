import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from '../../components/l2-page-template'
import bgImage from "../../images/hero_8918.jpg"

const DesignBuild = ({data}) => {

  const DesignBuildData = data.prismic.allDesignBuilds.edges[0]

return (
  <>
    <L2PagesLayout 
      title = {`Design/Build`}
      subnav = {`services`}
      backgroundImage={bgImage}
      content = {DesignBuildData.node.page_body}
    />
  </>
)
}

export const query = graphql`
query {
  prismic {
    allDesignBuilds {
      edges {
        node {
          page_title
          page_body
          meta_title
          meta_description
        }
      }
    }
  }
}
`


export default DesignBuild