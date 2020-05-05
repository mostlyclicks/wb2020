import React from 'react'
import styled from 'styled-components'

const SideBarAddress = () => (
  <>
    <StyledAddress>
      <p>
        200 Twilite Street
        <br />
        La Crescent, MN 55947
        <br />
        507-895-8903
        <br />
        Fax 507-895-8438
        <br />
        <a href="mailto:info@wieserbrothers.com">info@wieserbrothers.com</a>
      </p>
    </StyledAddress>
  </>
)

export default SideBarAddress

const StyledAddress = styled.div`
  // margin-top:8rem;
  font-family:'Open Sans';
  font-weight:400;
  background-color:#f3f3f3;
  padding:5px 20px;
  border-top:6px solid var(--wbGreenDark);
`