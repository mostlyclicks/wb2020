import React from 'react'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/BuildingAerial.jpg"


const OurFirmIndex = () => (
  <>
    <L2PagesLayout 
      title = {`Our Firm`}
      subnav = {`firm`}
      backgroundImage = {bgImage}
      content = {`
        <p>As a family-owned business, Wieser Brothers promotes these deeply-held values among our team.</p>

        <ul>
          <li>Expert craftsmanship and excellence in design/build project delivery.</li>
          <li>Creating relationships based on honesty and integrity</li>
          <li>Commitment to the highest standards of safety in the industry.</li>
          <li>Innovation to meet our client's future needs</li>
        </ul>

        <p>Wieser Brothers General Contractor, Inc. is a family-owned and operated firm based in La Crescent, MN.  Founded in 1994 by Jeff and Brian Wieser, the company has grown into a full-service, integrated 150 plus person team that includes journeyman carpenters, certified concrete finishers, trained steel erectors, skilled field superintendents and professional project managers, all dedicated to delivering quality construction services.  Wieser Brothers is the leader in design/build services, partnering closely with clients to meet current and future building needs with intelligence and efficiency. Over 60% of annual sales are in repeat business from satisfied customers.</p>
      `}
      
    />
  </>
)

export default OurFirmIndex