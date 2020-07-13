import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/wb-planning2.jpg"



const GeneralContracting = ({data}) => {

  const GeneralContractingData = data.prismic.allGeneral_contractings.edges[0]
  
  return (
  <>
    <L2PagesLayout 
      title={GeneralContractingData.node.page_title[0].text}
      subnav={`services`}
      backgroundImage={bgImage}
      content={GeneralContractingData.node.page_body}
    />
  </>
  )
}

export const query = graphql`
  query {
      prismic {
        allGeneral_contractings {
          edges {
            node {
              page_title
              page_body
            }
          }
        }
      }
  }

`

export default GeneralContracting