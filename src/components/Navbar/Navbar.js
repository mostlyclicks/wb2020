import React, { useState } from 'react'
import styled from 'styled-components'
import NavbarLinks from "./NavbarLinks"
import Logo from './Logo'
import { device } from "../media-queries"




  const Navbar = ({ siteTitle, menuLinks }) => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
      <Navigation>
        <Logo />
        
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>

        {navbarOpen ? (
          <Navbox>
            <NavbarLinks menuLinks={menuLinks} />
          </Navbox>
        ) : (
            <Navbox open>
              <NavbarLinks menuLinks={menuLinks} />
            </Navbox>
          )}
      </Navigation>
    )
  }

  export default Navbar

  const Navigation = styled.nav`
  font-family:'Open Sans';
  font-weight:400;
  height:80px;
  display:flex;
  // background-color: rgba(0,87,60,.8);//#00573c
  position:relative;
  justify-content:space-between;
  text-transform:uppercase;
  
  margin:0 auto;
  padding:0 5vw;
  z-index:2;
  align-self:center;
  a {color:#fff;}
  



  @media ${device.tablet} {
    max-width: 768px;

  }
  @media ${device.laptop} {
    max-width: 960px;
// border:1px solid yellow;
    font-size:14px;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
  }
`

  const Toggle = styled.div`
  display:none;
  height:100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width:768px) {
    display:flex;
  }
`
  const Navbox = styled.div`
  
  display:flex;
  height:100%;
  justify-content:flex-end;
  align-items:center;
  
  @media (max-width: 768px) {
    flex-direction:column;
    position:fixed;
    width:100%;
    justify-content:flex-start;
    padding-top:2vh;
    background-color:#fff;
    transition: all 0.3s ease-in;
    top:120px;
    left: ${props => (props.open ? "-100%" : "0")};
    :nth-child(last) {
      border-bottom:none;
    }
    a {
      color:#00573c;
      text-decoration:none;
      width:80%;
      border-bottom:1px solid #cdcdcd;
      padding:1rem 20px;
      
    }

  }
`
  const Hamburger = styled.div`
  background-color: #fff;
  width: 25px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 25px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`