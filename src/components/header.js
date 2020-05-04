import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import PropTypes from "prop-types"

import Navbar from "./Navbar/Navbar"
import { device } from "./media-queries"


const Header = ({ siteTitle, menuLinks }) => (
  <HeaderWrapper>
    <Navbar siteTitle={siteTitle} menuLinks={menuLinks}/>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


// STYLES ––––––––––––––––––––––––– //

const HeaderWrapper = styled.section`
  width:100%;
  // background-color:#00573c;
  
  margin:0 auto;
  
`