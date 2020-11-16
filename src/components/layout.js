import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import TopNav from "./top-nav"
import Footer from "./footer"
import styled from "styled-components"
import Search from "./search"
const searchIndices = [{ name: `wb2020-2`, title: `wb2020-2` }]
// import Helmet from 'react-helmet'
   

const Layout = ({ children }) => {

  return (
    <>
      
      <div className="site">
        <TopNav />
        <Header />
        <ContentDiv>{children}</ContentDiv>
        
        <Footer />
        <Search indices={searchIndices} />
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
