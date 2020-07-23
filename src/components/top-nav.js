import React from 'react'
import styled from "styled-components"
// import { Link } from "gatsby"
import { Link } from "gatsby-plugin-modal-routing"


import { device } from "./media-queries"


// COMPONENT –––––––––––––––––––––– //

const TopNav = () => {
  return (
    <StyledTopNav>
      <ul>
        <li>
          <Link to="/modal/covid/" asModal style={{
            color:'#fe9314',
            fontWeight:'bold'
          }}>COVID-19 UPDATE</Link>
        </li>
        <li>
          <Link to="/firm/careers">Careers</Link>
        </li>
        <li>
          <a href="mailto:bids@wieserbrothers.com">Submit Bids</a>
        </li>
        <li>
          <a href="mailto:info@wieserbrothers.com">Info</a>
        </li>
       
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <a href="tel:(507) 895-8903">507.895.8903</a>
        </li>
      </ul>
    </StyledTopNav>
  )
}

export default TopNav



// STYLES ––––––––––––––––––––––––– //

const StyledTopNav = styled.nav`
  position:relative;
  z-index:9000;
  background-color:#3d3d3d;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 18px;
    li:nth-child(1),
    li:nth-child(2),
    li:nth-child(4) {
      display: none;
    }
  }
  a {
    color:#ffffff;
    text-decoration:none;
    padding: 10px 4px;
    display: flex;
    flex-direction: row;
    &:hover {
      text-decoration:underline;
    }
  }

  @media ${device.tablet} {
    ul {
      font-size: 12px;
      justify-content: flex-end;
      li:nth-child(1),
      li:nth-child(2),
      li:nth-child(4) {
        display: block;
      }
    }

    a {
      padding: 8px 0.8rem;
    }
  }
`