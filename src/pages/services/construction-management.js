import React from 'react'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/Commitment-FleetFinal-web.jpg"

const ConstructionManagement = ({data}) => {
  
  const ConstMgmntData = data.prismic.allConstruction_managements.edges[0]

  return (
  <L2PagesLayout 
    title = {`Construction Management`}
    subnav= {`services`}
    backgroundImage={bgImage}
    content = {ConstMgmntData.node.page_body}
  />
  )
}

export default ConstructionManagement

export const ConstructionManagementData = graphql`
  query {
    prismic {
      allConstruction_managements {
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