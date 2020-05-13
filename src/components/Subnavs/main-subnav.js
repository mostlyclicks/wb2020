import React from 'react'
import { Link } from 'gatsby'

const MainSubnav = (props) => {

  if (props.subnav === 'firm') {
    return <FirmSubnav />
  } else if (props.subnav === 'services') {
    return <ServicesSubnav />
  } else if (props.subnav === 'commitment') {
    return <CommitmentSubnav />
  }
}

export default MainSubnav


const FirmSubnav = () => (
  <>
    <ul>
      <li>
        <Link to="/firm/history">History</Link>
      </li>
      <li>
        <Link to="/firm/safety">Safety</Link>
      </li>
      <li>
        <Link to="/firm/sustainability">Sustainability</Link>
      </li>
      <li>
        <Link to="/firm/professional-affiliations">Professional Affiliations</Link>
      </li>
      <li>
        <Link to="/firm/careers">Careers</Link>
      </li>
    </ul>
  </>
)

const ServicesSubnav = () => (
  <>
    <ul>
      <li>
        <Link to="/services/general-contracting">General Contracting</Link>
      </li>
      <li>
        <Link to="/services/design-build">Design/Build</Link>
      </li>
      <li>
        <Link to="/services/construction-management">Construction Management</Link>
      </li>
    </ul>
  </>
)

const CommitmentSubnav = () => (
  <>
    <ul></ul>
  </>
)

