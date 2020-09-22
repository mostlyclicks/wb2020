import React from 'react'
import styled from "styled-components"


// import VideoBG from "../../images/OctoberVideo-export2.mp4"
import VideoBG from "../../images/website-main-page-video.mp4"
// import VideoBG from "https://wb-2020.s3.amazonaws.com/WEBSITE-MAIN-SCREEN.mp4"
import { device } from "../media-queries"

const HeroSection = () =>(
  <StyledHeroSection>
    {/*  
    <TitleContainer>
    <h1>Welcome to Wieser Brothers</h1>
    </TitleContainer>
    */}
    <VideoContainer>
      <video
        className="video-player"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
      >
        <source
          src={VideoBG}
          type="video/mp4"
        />
      </video>
   

    {/*   
       
 
 
      <iframe
         title="video"
         width="853"
         height="480"
        src="https://www.youtube.com/embed/mT_surCAVss"
         frameborder="0"
         allowfullscreen
         allow="autoplay"
      
       ></iframe>
       */}
    </VideoContainer>
  </StyledHeroSection>
)

export default HeroSection

const StyledHeroSection = styled.section`
margin-bottom:-4px;


@media ${device.tablet} {
}
`


const VideoContainer = styled.div`
video {
  position:absolute;
  top:0px;
  left:0;
  width:100%;
  height:500px;
   -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
}
`