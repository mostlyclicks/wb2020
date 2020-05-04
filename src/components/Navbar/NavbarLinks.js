import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../media-queries"




const NavbarLinks = ({ menuLinks }) => (
  <>
      {console.log(menuLinks)}
      {menuLinks.map((link, i) => (
        <NavItem to={link.link}>{link.name}</NavItem>
      ))}
  </>
)

export default NavbarLinks



const NavItem = styled(Link)`
 font-family:'Open Sans';
  font-weight:700;       
 text-decoration: none;
 color:#111;
 display:inline-block;
 white-space:nowrap;
 margin:0 1vw;
 transition: all 200ms ease-in;
 position:relative;
 

 :after {
   position: absolute;
   bottom:0;
   left: 0;
   right: 0;
   width: 0%;
   content: "."
   color:transparent;
   background:goldenrod;
   height:1px;
   transition: all 0.4s ease-in;
 }

 :hover {
   color:var(--orange);
   ::after {
     width:100%;
   }
 }

 @media (max-width: 768px) {
   padding:20px 0;
   font-size:1.5rem;
   z-index:6;
   flex-wrap:nowrap;
 }
`
