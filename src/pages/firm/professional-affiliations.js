import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/ABC-wi.jpg"

const ProfessionalAffiliations = ({data}) => {
  
  const ProfAffData = data.prismic.allProfessional_affiliationss.edges[0]
  
  return (
  <>
    <L2PagesLayout 
      title={`Professional Affiliations`}
      subnav={`firm`}
      backgroundImage={bgImage}
      content = {ProfAffData.node.page_body}
    />
  </>

)
}

export const query = graphql`
query {
  prismic {
    allProfessional_affiliationss {
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

export default ProfessionalAffiliations