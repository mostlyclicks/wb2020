import React from "react"
import { Link } from "gatsby"

const ProjectCatNav = () => {

  return (
    <div>
      <ul>
        <li>
          <Link to="/project-categories/cold-storage-warehousing">Cold Storage/Warehousing</Link>
        </li>
        <li>
          <Link to="/project-categories/community-worship">Community/Worship</Link>
        </li>
        <li>
          <Link to="/project-categories/educational">Educational</Link>
        </li>
        <li>
          <Link to="/project-categories/financial">Financial</Link>
        </li>
        <li>
          <Link to="/project-categories/food-processing">Food Processing</Link>
        </li>
        <li>
          <Link to="/project-categories/financial">Financial</Link>
        </li>
        <li>
          <Link to="/project-categories/lodging-multi-dwelling">Lodging/Multi-Dwelling</Link>
        </li>
        <li>
          <Link to="/project-categories/manufacturing">Manufacturing</Link>
        </li>
        <li>
          <Link to="/project-categories/office">Office</Link>
        </li>
        <li>
          <Link to="/project-categories/automotive">Automotive</Link>
        </li>
        <li>
          <Link to="/project-categories/retail">Retail</Link>
        </li>

      </ul>
    </div>
  )
}

export default ProjectCatNav