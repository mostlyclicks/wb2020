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
    // content = {`
    //   <p>Wieser Brothers is a full-service general contractor, specializing in turn key solutions for our customers. 75% of our work is done on construction management concept.</p>

    //   <p>We believe in not just building a great building, but building a continued relationship with our clients. In the end, we are partners in a project that you are proud to be a part of, one that will meet your needs <em><strong>now and into the future.</strong>
    //   </em></p>         
    // `}
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