import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from "../media-queries"
// import gridBackground from '../../images/hero_8918_background.jpg'
import block2 from "../../images/Group-Photo-2.jpg"
import block3 from "../../images/JPEG-image-1.jpg"
import block4 from "../../images/DJI_0317.jpg"


const HomeGrid = () => {
  return (
    <GridSection>
      <GridContainer>
        <GridItem></GridItem>
        <GridItem>
          <GridBox>
            <h1>
              Trust
              <br />
              Partnership
              <br />
              Excellence
            </h1>
            <Link to="/commitment">Learn more</Link>
          </GridBox>
        </GridItem>
        <GridItem>
          <GridBox>
            <h1>Projects</h1>
            
            <Link to="/projects">View projects</Link>
          </GridBox>
        </GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem>
          <GridBox>
            <h1>Careers</h1>
            <h3>Constructing your career path?  Join Wieser Brothers Crew</h3>
            <p>See all of our job opportunities</p>
            <Link to="/firm/careers">Start here</Link>
          </GridBox>
        </GridItem>
      </GridContainer>
    </GridSection>
  )
}

export default HomeGrid

const GridSection = styled.section`
  
  padding-top:0px;
  padding-bottom:0px;  
  width: 100%;

  background-position-y:50%;
  background-size:100%;
  background-repeat:no-repeat;
  background-color:#ffffff;
  @media ${device.tablet} {
    padding-top:40px;
    padding-bottom:40px;
    // border-top:1px solid red;
    margin-top:-100px;
  }
`
const GridContainer = styled.section`
  display: grid;
  grid-gap: 0px;
  @media ${device.tablet} {
    padding-top:20px;
    grid-gap:40px;
    grid-template-columns:1fr 1fr;
    max-width:768px;
    margin:0 auto;
  }
  @media ${device.laptop} {
    grid-template-columns:1fr 1fr;
    max-width:960px;
  }
  @media ${device.laptopL} {
    grid-template-columns:1fr 1fr;
    max-width:1200px;
  }
`

const GridItem = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  height: 400px;
  display: block;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  color: var(--orange);
  :nth-child(1) {
    order: 1;
    background-image: url(${block2});
    background-size:cover;
    background-position-x:center;
    background-repeat:no-repeat;
  }
  :nth-child(2) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--darkGray);
  }
  :nth-child(3) {
    order: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--darkGray);
  }
  :nth-child(4) {
    order: 3;
    background-image: url(${block3});
    background-size:cover;
  }
  :nth-child(5) {
    order: 5;
    background-image: url(${block4});
    background-size:cover;
  }


  :nth-child(6) {
    order: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--darkGray);
  }

  @media ${device.tablet} {
    height: 300px;
    :nth-child(1) {
      order: 1;
      background-position-x:-50px;
    }
    :nth-child(2) {order: 2;}
    :nth-child(3) {order: 3;}
    :nth-child(4) {order: 4;}
    :nth-child(5) {order: 5;}
    :nth-child(6) {order: 6;}
  }

  @media ${device.laptop} {
    height:400px;
    
  }
  @media ${device.laptopL} {
    :nth-child(1) {
      background-position-x:-50px;
    }
  }
`
const GridBox = styled.div`
  width: 250px;
  height: 250px;
  // overflow: hidden;
  h1 {
    font-size: 36px;
    line-height: 2.45rem;
    margin-top: 1rem;
    font-family: "IBM Plex Serif";
  }
  p {
    font-family:"Open Sans";
    font-weight:400;
    margin-bottom:2rem;
  }
  a {
    color: #fff;
    text-transform:uppercase;
    font-size:18px;
    font-weight:bold;
    text-decoration:none;
    font-family:'Open Sans';
    transition:.5s;
    
    border:1px solid #fff;
    padding:5px 20px;
    :hover {
      color:var(--orange);
    }
  }
`