import React, { useState } from 'react'
import styled from 'styled-components'
import NavbarLinks from "./NavbarLinks"
import Logo from './Logo'
import { device } from "../media-queries"
import BGImg from '../../images/slants2.png'




  const Navbar = ({ siteTitle, menuLinks }) => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
      <Navigation>
        <Logo alt={siteTitle}/>
        
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => {
            setNavbarOpen(!navbarOpen)
          }}
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
    font-family: "Open Sans";
    font-weight: 400;
    height: 100px;
    display: flex;
    background-image: url(${BGImg});
    background-position-y: -200px;
    background-position-x: -60px;
    position: relative;
    justify-content: space-between;
    text-transform: uppercase;
    margin: 0px auto;
    padding: 0;
    z-index: 1000;
    align-self: center;
    a {
      color: #fff;
    }

    @media ${device.tablet} {
      // max-width: 768px;
      margin: 0px auto;
      height: 200px;
      justify-content: flex-start;
      font-size: 12px;
      margin-right: 3rem;
      width: 100%;
      background-position-y: -150px;
      background-position-x: -80px;
    }
    @media ${device.laptop} {
      // max-width: 960px;
      justify-content: space-around;
      font-size: 14px;
      background-position-y: -120px;
      background-position-x: -80px;
    }
    @media ${device.laptopL} {
      // max-width: 1200px;
      background-position-y: -100px;
    }
  `
const Toggle = styled.div`
  display:none;
  height:100%;
  cursor: pointer;
  padding: 0 10vw;
  z-index:3000;

  @media (max-width:768px) {
    display:flex;
  }
`
const Navbox = styled.div`
  display:flex;
  height:100%;
  justify-content:flex-end;
  align-items:center;

  @media ${device.tablet} {    
    margin-left:40px;
    margin-top:-25px;
  }
  @media ${device.laptop} {
    margin-right:50px;
  } 
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