import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/Sustainability.jpg"

const Sustainability = ({data}) => {
  
  const SustainabilityData = data.prismic.allSustainabilitys.edges[0]

  return (
  <>
    <L2PagesLayout 
      title= {`Sustainability`}
      subnav={`firm`}
      backgroundImage = {bgImage}
      content = {SustainabilityData.node.page_body}
    
    />
  </>

)
}

export const query = graphql`
query {
  prismic {
    allSustainabilitys {
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

export default Sustainability