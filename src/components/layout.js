import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import TopNav from "./top-nav"
import Footer from "./footer"
// import favicon from '../images/wieserbrothers-icon.png'
// import Helmet from 'react-helmet'
   

const Layout = ({ children }) => {
  return (
    <>
      
      <div className="site">
        <TopNav />
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
