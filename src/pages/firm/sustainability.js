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
        <p>Wieser Brothers is committed to environmentally responsible building, and proud to be a member of the U.S. Green Building Council. Our dedication to sustainability and green construction is visible in all aspects of our business, from our job site recycling practices to the solar panels installed on our office roof.</p>

        <p>To ensure the highest degree of quality and the efficiency for your green building, the Wieser Brothers team includes an experienced LEED Accredited Professional who can help environmentally-conscious customers plan each green project. We promote awareness of the latest sustainable building techniques and principles, and partner with LEED Certified organizations to make certain your project achieves its green building goals.</p>

        <p>The PV Solar System that Wieser Brothers General Contractor, Inc. installed provides for local power generation.  The 156 panel, 39 kW array, will generate up to 75% of Wieser Brothers’ building electric needs.  This generation comes from a clean energy source allowing for fossil fuel reduction, equivalent to 29 acres of forest each year.  For the community, this means cleaner air, water and decreased CO2 emissions.  All around, solar is a good building practice leading to long-term sustainable business.  Wieser Brothers works with many customers who are following green and sustainable building practices.</p>      
      `}
    
    />
  </>

)

export default Sustainability