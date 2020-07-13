import React from 'react'
import { graphql } from 'gatsby'
import L2PagesLayout from '../../components/l2-page-template'
import bgImage from "../../images/Action-Field-Picture.jpg"

const OurServices = ({data}) => {
  
  const ServiceData = data.prismic.allServicess.edges[0]
  
  return (
  <>
    <L2PagesLayout 
      title = {`Our Services`}
      subnav = {`services`}
      backgroundImage={bgImage}
      content = {ServiceData.node.page_body}
    />
  </>
  )
}

export const ServicesQuery = graphql` 
query {
  prismic {
    allServicess {
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

export default OurServices