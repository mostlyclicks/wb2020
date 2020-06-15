import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { device } from "../components/media-queries"
// import MainSubnav from "../components/Subnavs/main-subnav"
// import SideBarAddress from "./Subnavs/address-sidebar"
import RandomTestimonial from "../components/testimonials"
import bgImg from "../images/trust-partnership-excellence.png"
import bgImage from "../images/WieserBrothers-commitment-DJI_0770.jpg"

const NotFoundPage = props => (
  <Layout>
    <SEO title="404: Not found" />
    <ContentWrapper>
      <L2MainImage style={{
        backgroundImage: 'url(' + bgImage + ')'
      }}>
        <L2Title>
          <h1>404: Page does not exist</h1>
        </L2Title>
      </L2MainImage>
      <Content>
        <MainContent>
          <p>The page you are looking for does not exist.</p>
          
        </MainContent>

        <L2Navigation>
          

          <RandomTestimonial />

        </L2Navigation>
      </Content>

    </ContentWrapper>
  </Layout>
)

export default NotFoundPage



const ContentWrapper = styled.div`


  
`

const Content = styled.section`
display:grid;
grid-template-columns:1fr;
grid-gap:20px;
padding:1.5rem;

 background-image:url(${bgImg});
 background-repeat:no-repeat;
 background-position-x:100%;
 background-position-y:0px;
 background-size:35%;

 
  @media ${device.tablet} {
    margin:0 auto;
    // border:1px solid green;
    max-width:768px;
    grid-template-columns:2fr 1fr;
  }

  @media ${device.laptop} {
    
    max-width:960px;
    grid-template-columns:3fr 1fr;
  }

  @media ${device.laptopL} {
    // border:1px solid black;
    max-width:1200px;
  }

`

const MainContent = styled.main`
  font-family:'Open Sans';
  font-weight:400 !important;
  margin-top:2.5rem;
`
const L2Title = styled.div`
width:100%;
  h1 {
    display:inline-block;
    margin-bottom:-30px;
    margin-left:auto;
    margin-right:auto;
    color:#ffffff;
    font-size:28px;
    font-family:'IBM Plex Serif';
    background-color: var(--darkGray);
    padding:2rem 3rem;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    border-top:6px solid var(--orange);
  }
@media ${device.tablet} {
  max-width:768px;
  margin:0 auto;
}
@media ${device.laptop} {
  max-width:960px;
  margin:0 auto;
}
@media ${device.laptopL} {
  max-width:1200px;
  margin:0 auto;
}

`

const L2MainImage = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-end;
  height:300px;
  width:100%;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  // @media ${device.tablet} {
  //   height:350px;
  // }
  @media ${device.tablet} {
    height:400px;
    background-position-y:-120px;
    margin-top:-200px;
  }
  @media ${device.laptop} {
    height:550px;
    background-position-y:-100px;
  }
  @media ${device.laptopL} {
    height:700px;
    background-position-y:-200px;
  }
`

const L2Navigation = styled.aside`
  display: flex;
  flex-direction: column;

  padding-top: 52px;
  ul {
   
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 70px;
    li:nth-last-child(1) {
      border-bottom: none;
    }

    li {
      border-bottom: 1px solid #ededed;
      text-decoration: none;
    }
    li a {
      font-family:'Open Sans';
      color:var(--wbGreenDark);
      font-weight:400;
      display: block;
      padding: 1rem;
      text-decoration: none;
    }
  }
`
