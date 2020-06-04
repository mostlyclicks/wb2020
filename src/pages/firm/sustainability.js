import React from 'react'
import L2PagesLayout from "../../components/l2-page-template"
import bgImage from "../../images/Sustainability.jpg"

const Sustainability = () => (
  <>
    <L2PagesLayout 
      title= {`Sustainability`}
      subnav={`firm`}
      backgroundImage = {bgImage}
      content = {`
        <p>Wieser Brothers is committed to environmentally responsible building and proud to be a member of the U.S. Green Building Council. Our dedication to sustainability and green construction is visible in all aspects of our business, from our job site recycling practices to the solar panels installed on our office roof.</p>

        <p>To ensure the highest degree of quality and the efficiency for your green building, the Wieser Brothers team includes experienced LEED Accredited Professionals who can help environmentally-conscious customers plan each green project. We promote awareness of the latest sustainable building techniques and principles, and partner with LEED Certified organizations to make certain your project achieves its green building goals.</p>

        <p>Wieser Brothers has 323 solar panels on our headquarters building.  Solar power provides 100 percent of total energy consumption for all office and shop operations.  This generation comes from a clean energy source allowing for fossil fuel reduction. For the community, this means cleaner air, water and decreased CO2 emissions. All around, solar is a good building practice leading to long-term sustainable business. Wieser Brothers works with many customers who are following green and sustainable building practices.</p>   
      `}
    
    />
  </>

)

export default Sustainability