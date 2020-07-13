import React from 'react'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/Group-Photo-2.jpg"

const History = ({data}) => {
  
  const HistoryData = data.prismic.allHistorys.edges[0]

  return (
  <>
    <L2PagesLayout 
      title = {`Our History`}

      backgroundImage = {bgImage}
      subnav={`firm`}
      content = {HistoryData.node.page_body}
 
      />
    </>
  
)
}

export const HistoryQuery = graphql`
query {
  prismic {
    allHistorys {
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

export default History
