import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
//import PropTypes from "prop-types"

import Navbar from "./Navbar/Navbar"

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            description
            menuLinks {
              link
              name
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Navbar 
          siteTitle={data.site.siteMetadata.title} 
          menuLinks={data.site.siteMetadata.menuLinks} 
        />
      </HeaderWrapper>
    )}
  />
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


// STYLES ––––––––––––––––––––––––– //

const HeaderWrapper = styled.section`
  width:100%;
  // border:5px solid blue;
  // background-color:#00573c;
  
  margin:0 auto;
  
`