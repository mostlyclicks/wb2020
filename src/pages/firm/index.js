import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/BuildingAerial.jpg"

const OurFirmIndex = ({data}) => {

const OurFirmData = data.prismic.allOur_firms.edges[0]

return (
  <>
    <L2PagesLayout 
      title = {`Our Firm`}
      subnav = {`firm`}
      backgroundImage = {bgImage}
      content = {OurFirmData.node.page_body}      
    />
  </>
)
}

export const query = graphql`
query {
  prismic {
    allOur_firms {
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

export default OurFirmIndex