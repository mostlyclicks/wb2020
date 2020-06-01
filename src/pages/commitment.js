import React from 'react'
import L2PagesLayout from "../components/l2-page-template"
import bgImage from "../images/WieserBrothers-commitment-DJI_0770.jpg"
import block2 from "../images/1JeffBrian2017.jpeg"


const OurCommitment = () => (
  <L2PagesLayout 
      title = {`Our Commitment`}
      subnav = {`commitment`}
      backgroundImage={bgImage}
      content = {`
        <img src=${block2} alt="Jeff and Brian Wieser" width="50%" style="float:right;margin-left:2rem;margin-bottom:1rem;margin-top:3rem;"/>
        <h3>Trust</h3>
        <p>Wieser Brothers General Contractor, Inc. is a family-owned and operated firm based in La Crescent, MN. Founded in 1994 by Jeff and Brian Wieser, the company has grown into a full-service integrated 120 person team that includes journeyman carpenters, certified concrete finishers, steel erection crews, skilled field superintendents and professional project managers, all dedicated to delivering quality construction services. Wieser Brothers is the leader in design-build services, partnering closely with clients to meet current and future building needs with intelligence and efficiency. Trust is the cornerstone of any Wieser Brothers project. Over 60% of annual sales is in repeat business from satisfied customers.</p>
        <h3>Partnership</h3>
        <p>Wieser Brothers is an expert at partnering and it shows through out the design/build process. We listen closely to our clients so we can achieve the best outcome for your plans, your budget and your schedule. This open approach supports the sharing of ideas from a project's earliest stages, allowing us to more effectively manage time, cost and quality. Wieser Brothers places a high value on two-way communication so our project owners are fully aware of construction progress and can always receive a prompt response to their questions or concerns.</p>
        <p>Whether the project is large or small, Wieser Brothers goal is to provide the highest standards of value and service from concept to completion, at a competitive price. In the end, we are partners in a project that you're proud to be part of, one that will meet your needs now and into the future. Nearly 85% of our business is design/build, making Wieser Brothers and experienced leader in one of the most significant trends in design and construction today.</p>
        <h3>Excellence</h3>
        <p><strong>The Wieser Brothers Advantage</strong>
        </p>
        <p>Clients place their trust in Wieser Brothers for exceptional performance and craftsmanship. The advantage of working with us doesn't stop there.</p>
        <ul>
        <li>Wieser Brothers attention to federal and state safety standards is a matter of policy and practice, resulting in and exemplary safety record within the construction industry.</li>
        <li>As a member of the U.S. Green Building Council, Wieser Brothers promotes awareness of the latest sustainable building techniques and principles, particularly those that are competitive with conventional counterparts. Our team includes an experienced LEED Accredited Professional who can help environmentally-conscious customers plan their green project.</li>
        <li>Our business and financial practices are audited annually for bonding and insurance purposes, ensureing the financial strength and stability to support our projects from beginning to end.</li>
        <li>Buildings constructed by Wieser Brothers come with a one-year guarantee, which we back up with an eleven month walk through to address product or subcontractor warranty issues or concerns.</li>
        <li>We continue to invest in technology to ensure project efficiency and convenience. Whether it’s new office infrastructure or a new crane for the field, we make investments to achieve greater efficiencies and safety for our clients.</li>
        </ul>
      `}
      />
)

export default OurCommitment