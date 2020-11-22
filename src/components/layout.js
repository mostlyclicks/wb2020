import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import TopNav from "./top-nav"
import Footer from "./footer"
import styled from "styled-components"
// import Search from "./search"
// const searchIndices = [{ name: `wb2020-2`, title: `wb2020-2` }]
// import Helmet from 'react-helmet'
   

const Layout = ({ children }) => {

  return (
    <>
      
      <div className="site">
        <TopNav />
        <Header />
        
        <ContentDiv>
          
          {children}
          <input id="search" type="search" placeholder="Search for content..." />
          
        </ContentDiv>
        
        
        <Footer />
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const ContentDiv = styled.div`
  input[type=search] {
    width:100%;
    border:none;
    border-bottom:1px solid #cdcdcd;
    line-height:.5em;
    padding:.6em 20px;
    font-size:2em;
    background-color:transparent;
  }
  
`
