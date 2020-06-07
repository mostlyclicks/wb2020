import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import TopNav from "./top-nav"
import Footer from "./footer"
import styled from "styled-components"
// import Helmet from 'react-helmet'
   

const Layout = ({ children }) => {

  return (
    <>
      
      <div className="site">
        <TopNav />
        <Header />
        <ContentDiv>{children}</ContentDiv>
        
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


`
