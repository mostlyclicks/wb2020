import React from 'react'
import L2PagesLayout from '../../components/l2-page-template'
import bgImage from "../../images/Action-Field-Picture.jpg"

const OurServices = () => (
  <>
    <L2PagesLayout 
      title = {`Our Services`}
      subnav = {`services`}
      backgroundImage={bgImage}
      content = {`
        <h3>Partnership Approach Services Provided</h3>

        <p>Under the partnering approach, you will receive all the services described below. Our negotiated contracts have a guaranteed maximum amount with an open book policy allowing all savings to be realized by the owner.</p>

        <p>The sum of these services creates a culture of teamwork on your project, resulting in a high quality project that is completed on time and within budget.</p>
        <h3>Pre-Design and Construction Services</h3>
        <ul>
        <li>Design Meeting Participation</li>
        <li>Establish Project Requirements</li>
        <li>Alternative Project Strategies</li>
        <li>Project Organization and Team Responsibilities</li>
        <li>Budget Review</li>
        <li>Identify Project Constraints</li>
        <li>Procedures Development</li>
        <li>Develop Bidder Interest List</li>
        <li>Review Bids with Team</li>
        </ul>
        <h3>Construction Services</h3>
        <ul>
        <li>Preparation of Project Manual</li>
        <li>Coordination Meetings</li>
        <li>Communication Reports</li>
        <li>Maximize Owner Purchased Materials</li>
        <li>Manage Construction Process</li>
        <li>Manage Quality Control</li>
        <li>Manage Safety of Project</li>
        <li>Monitor Flow of Customers for Their Safety and Convenience</li>
        </ul>

        <h3>Close-Out Services</h3>
        <ul>
        <li>Post construction inspection</li>
        <li>Physical walk-thru of the jobsite</li>
        <li>Create punch list of all items to be completed</li>
        <li>Ensure all the phases of work are completed at 100% statisfaction to the owner</li>
        <li>Obtain lien waivers from subcontractors and submit to owner's financial provider</li>
        <li>Submit as-built plans and operation and maintenance manual to the owner</li>
        <li>Issue owner warranties</li>
        <li>11 month warranty walk-thru</li>
        </ul>
      
      `}
    />

  </>
)

export default OurServices