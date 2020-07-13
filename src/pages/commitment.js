import React from 'react'
import L2PagesLayout from "../components/l2-page-template"
import bgImage from "../images/WieserBrothers-commitment-DJI_0770.jpg"


const OurCommitment = ({data}) => {

const CommitmentData = data.prismic.allCommitmens.edges[0]

return (
  <L2PagesLayout 
      title = {`Our Commitment`}
      subnav = {`commitment`}
      backgroundImage={bgImage}
      content={CommitmentData.node.page_body}
   />
  )
}

export const query = graphql`
query {
  prismic {
    allCommitmens {
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

export default OurCommitment