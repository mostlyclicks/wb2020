import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/Framing-Construction.jpg"


const Safety = ({data}) => {
  
  const SafetyData = data.prismic.allSafetys.edges[0]
  
  return (
  <>
    <L2PagesLayout 
      title={`Safety`}
      subnav={`firm`}
      backgroundImage = {bgImage}
      content = {SafetyData.node.page_body}
    />
  </>
  
)
}

export const SafetyQuery = graphql`
  query {
    prismic {
      allSafetys {
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

export default Safety

