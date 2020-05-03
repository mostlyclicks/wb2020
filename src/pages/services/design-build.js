import React from 'react'
import L2PagesLayout from '../../components/l2-page-template'
import bgImage from "../../images/hero_8918.jpg"

const DesignBuild = () => (
  <>
    <L2PagesLayout 
      title = {`Design/Build`}
      subnav = {`services`}
      backgroundImage={bgImage}
      content = {`
        <p>Wieser Brothers is an expert at partnering , and it shows throughout the design/build process. We listen closely to you, our client, so we can achieve the best outcome for your plans, your budget and your schedule.</p>

        <p>This open approach support the sharing of ideas from a project's earliest stages, allowing us to more effectively manage time, cost and quality.</p>
      `}
    />

  </>
)

export default DesignBuild