import React from 'react'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/wb-planning2.jpg"


const GeneralContracting = () => (
  <>
    <L2PagesLayout 
      title={`General Contracting`}
      subnav={`services`}
      backgroundImage={bgImage}
      content={`
      <p>As an industry leading general contractor, Wieser Brothers will manage all aspects of your construction project. We provide innovative solutions to your building project.</p>
      <p>In addition, we self-perform:</p>
      <ul> 
        <li>Concrete Work</li>
        <li>Carpentry</li>
        <li>Steel Erection</li>
        <li>Metal Stud Work</li>
        <li>Plastering</li>
      </ul>
 
    `}
    
    />
  </>
)

export default GeneralContracting