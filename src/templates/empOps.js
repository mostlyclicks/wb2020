import React from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../components/media-queries"
import SideBarAddress from "../components/Subnavs/address-sidebar"
import bgImg from "../images/Action-Field-Picture.jpg"

const EmpOp = ( {data} ) => {

    const empOpData = data.prismic.allEmployment_opportunitys.edges[0]

  return (
    <Layout>
    <CareerHeader />
    <CareerWrapper>
      <CareerMain>
        <h1>{RichText.asText(empOpData.node.title)}</h1>
        <JobDescription>
          {RichText.render(empOpData.node.job_description)}
        </JobDescription>
      </CareerMain>
      <CareerNav>
        <SideBarAddress />
      </CareerNav>
    </CareerWrapper>
    </Layout>
  )
}

export default EmpOp


// {/* query using the UID */}
 export const query = graphql`
  query EmpOppQuery($uid: String) {
  prismic {
    allEmployment_opportunitys(uid: $uid) {
      edges {
        node {
            title
            job_description
          }
        }
      }
    }
  } 
 `

 const JobDescription = styled.div`
  font-family:'Open Sans';
  font-weight:400;
    
 `
 const CareerHeader = styled.div`

  height:200px;
  margin-top:-140px;
  background-image:url(${bgImg});
  background-position-y:75%;
  background-size:cover;

 `

const CareerWrapper = styled.section`
  
  margin:20px auto;
  width:100%;
  display:grid;
  grid-template-columns:1fr;
  grid-gap:40px;
  

  @media ${device.tablet} {
    max-width:768px;
    grid-template-columns:2fr 1fr;
  }
  @media ${device.laptop} {
    max-width:960px;
    grid-template-columns:3fr 1fr;
  }
  @media ${device.laptopL} {
    max-width:1200px;
  }
`

const CareerMain = styled.div`
  h1 {
      font-family:'IBM Plex Serif';
      font-size:32px;
    }
  padding:20px;
  img {
    width:100%;
  }
  @media ${device.tablet} {
    padding:0;
    max-width:768px;
  }

`

const CareerNav = styled.aside``