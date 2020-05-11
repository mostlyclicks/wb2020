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
  
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#00573c+0,00573c+72,00573c+100&1+0,0+90,0+100 */
  background: -moz-linear-gradient(top,  rgba(0,87,60,1) 0%, rgba(0,87,60,0.2) 72%, rgba(0,87,60,0) 90%, rgba(0,87,60,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(0,87,60,1) 0%,rgba(0,87,60,0.2) 72%,rgba(0,87,60,0) 90%,rgba(0,87,60,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(0,87,60,1) 0%,rgba(0,87,60,0.2) 72%,rgba(0,87,60,0) 90%,rgba(0,87,60,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00573c', endColorstr='#0000573c',GradientType=0 ); /* IE6-9 */

  position:relative;
  justify-content:space-between;
  text-transform:uppercase;
  margin:0px auto;
  padding:0;
  z-index:11998;
  align-self:center;
  a {color:#fff;}
  
  @media ${device.tablet} {
    // max-width: 768px;
    margin:0px auto;
    height:140px;
    justify-content:flex-start;
    font-size:12px;
    margin-right:3rem;
    width:100%;
    clip-path:polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%);
  }
  @media ${device.laptop} {
    // max-width: 960px;    
    clip-path:polygon(3% 0%, 100% 0%, 97% 40%, 10% 100%);
    justify-content:space-around;
    font-size:14px;
  }
  @media ${device.laptopL} {
    // max-width: 1200px;
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