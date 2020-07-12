import React from 'react'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/wb-planning2.jpg"
import { RichText } from "prismic-reactjs"


const GeneralContracting = ({data}) => {

  const GeneralContractingData = data.prismic.allGeneral_contractings.edges[0]
  console.log('hello')
  console.log(GeneralContractingData.node.page_title[0].text)
  console.log(GeneralContractingData.node.body[0].text)
  console.log('goodbye')
  // const GenContContent = GeneralContractingData.node

  return (
  <>
    <L2PagesLayout 
      title={GeneralContractingData.node.page_title[0].text}
      subnav={`services`}
      backgroundImage={bgImage}
      content={RichText.asText(GeneralContractingData.node.body)}

    //   content={`
    //   <p>As an industry leading general contractor, Wieser Brothers will manage all aspects of your construction project. We provide innovative solutions to your building project.</p>
    //   <p>In addition, we self-perform:</p>
    //   <ul> 
    //     <li>Concrete Work</li>
    //     <li>Carpentry</li>
    //     <li>Steel Erection</li>
    //     <li>Metal Stud Work</li>
    //     <li>Plastering</li>
    //   </ul>
 
    // `}
    />

    <div>
        {GeneralContractingData.node.body[0].text}
    </div>  

  </>
  )
}

export const GenContracting = graphql`
  query {
      prismic {
        allGeneral_contractings {
          edges {
            node {
              page_title
              body
            }
          }
        }
      }
  }

`


export default GeneralContracting