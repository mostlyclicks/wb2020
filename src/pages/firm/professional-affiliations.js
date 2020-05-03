import React from 'react'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/ABC-wi.jpg"

const ProfessionalAffiliations = () => (
  <>
    <L2PagesLayout 
      title={`Professional Affiliations`}
      subnav={`firm`}
      backgroundImage={bgImage}
      content = {`
        <ul>
          <li>7 Rivers Region Alliance</li>
          <li>Accredited Quality Contractor (AQC)</li>
          <li>American Building - Authorized Builder</li>
          <li>American Institute of Architects- Allied Individual Member</li>
          <li>Associated Builders and Contractors, Inc (A.B.C.)</li>
          <li>Energy Panel Structures – Authorized Reseller</li>
          <li>Great Rivers United Way </li>
          <li>Greater La Crosse Area Chamber of Commerce</li>
          <li>La Crescent Chamber of Commerce</li>
          <li>La Crosse Area Builders Association (LABA)</li>
          <li>La Crosse Area Development Corporation</li>
          <li>La Crosse Builders Exchange, Inc.</li>
          <li>Rochester Area Chamber of Commerce</li>
          <li>Star Building Systems – Authorized Builder</li>
          <li>Tomah Area Chamber of Commerce</li>
          <li>US Green Building Council Member (USGBC)</li>
          <li>Viroqua Chamber of Commerce</li>
          <li>Winona Area Chamber of Commerce</li>
        </ul>    
      `}
    />
  </>

)

export default ProfessionalAffiliations