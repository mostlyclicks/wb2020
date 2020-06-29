import React from 'react'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/wb-planning2.jpg"
import { RichText } from "prismic-reactjs"


const GeneralContracting = ({data}) => {

  const GeneralContractingData = data.prismic.allGeneral_contractings.edges[0]
  console.log(GeneralContractingData.node)
  // const GenContContent = GeneralContractingData.node

  return (
  <>
    <L2PagesLayout 
      title={`General Contracting`}
      subnav={`services`}
      backgroundImage={bgImage}
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

    <div>df
      {RichText.render(GeneralContractingData)}
    </div>  

  </>
  )
}

export const GenContractin = graphql`
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