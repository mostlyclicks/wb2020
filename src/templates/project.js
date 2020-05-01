import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../components/media-queries"

export const query = graphql`
         query ProjectQuery($uid: String) {
           prismic {
             allProjects(uid: $uid) {
               edges {
                 node {
                   _meta {
                     uid
                     id
                   }
                   title
                   location
                   long_description
                   body {
                     ... on PRISMIC_ProjectBodyImage {
                       fields {
                         image 
                         imageSharp {
                           childImageSharp {
                             fluid(quality: 80) {
                               srcWebp
                             }
                           }
                         }
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `

const Project = ({ data }) => {
  
  const project = data.prismic.allProjects.edges

  
  
  return (
    <Layout>
      
       <StyledProjectGrid>
        {project.map(proj => {

          return (
            <MainDiv>
              <div id="project-title-location" className="box">
                <h1>{RichText.asText(proj.node.title)}</h1>
                
                <h3>{proj.node.location}</h3>
              </div>

              <div id="project-description" className="box">
                {RichText.render(proj.node.long_description)}
              </div>

              {proj.node.body.map(({ fields }) => {

                return (
                  <>
                    {fields.map((field, index) => {
                      return (
                        <div id={index} className="box"
                          style={{ 
                            backgroundImage: 'url(' + field.imageSharp.childImageSharp.fluid.srcWebp + ')'
                          }}>
                          
                        </div>
                        )
                    })}            

                  </>
                )
              })}
            </MainDiv>
          )
        })}
      </StyledProjectGrid>
    </Layout>
  )
}

export default Project

const MainDiv = styled.div`
  display:inline-grid;
  width:100%;
  div:nth-child(1) {
    border-top:3px solid var(--orange);
    margin:20px;
    color:var(--orange);
    background-color: var(--darkGray);
    h1 {font-family:'IBM Plex Serif';}
    h3 {
      font-family:'Open Sans';
      font-weight:400;
      
    }
  }
  div:nth-child(2) {
    p {margin-top:0;}
    font-family:'Open Sans';
    font-size:14pt;
  
  }

  div:nth-child(n + 6) {display:none;}
  
  margin:0 auto;
  grid-gap:3px; 
  
  div:nth-child(n+3) {
    height:400px;
    background-position:center;
    background-repeat:no-repeat;
    margin:10px 20px;
  }
  
  .box {
    padding:1rem;
  }

  


  @media ${device.tablet} {
    
    margin-top:40px;
    margin-bottom:100px;
    max-width:100%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    height:100vh;
    grid-gap:2rem;

    div #5 {
      display:none;
    }
      
    div:nth-child(n+3) {
      height:auto;
      
    }

    //TITLE BOX
    div:nth-child(1) {
      grid-area:2 / 4 / 3/ 6;   
      background-color:var(--darkGray);
      order:3;
      box-shadow:10px 10px 25px rgba(0,0,0,.2);
      height:80%;
      

      
    }
    //DESCRIPTION TEXT
    div:nth-child(2) {
      grid-area:4 / 1 / 5 / 4;
      
      order:4;
      // display:none;
    }
    //MAIN PICTURE
    div:nth-child(3) {
      grid-area:1 / 1 / 4 / 5;
      background-size:cover;
      box-shadow:5px 5px 15px rgba(0,0,0,.25);
      
    }
    div:nth-child(4) {
      background-color:green;
      grid-area:5 / 1 / 8 / 4;
      background-size:cover;
      box-shadow:3px 3px 10px rgba(0,0,0,.3);
      // display:none;
    }
    div:nth-child(5) {
      background-color:gray;
      grid-area: 4/ 4 / 6 / 6;
      background-size:cover;
      background-position:center;
      box-shadow:3px 3px 10px rgba(0,0,0,.3);
      // display:none;
      
    }
    div:nth-child(6) {
      background-color:violet;
      grid-area: 6 / 4 / 7 / 5;
      background-size:cover;
      background-position:center;
      box-shadow:3px 3px 10px rgba(0,0,0,.3);
      display:none !important;
      
    }
    div:nth-child(7) {
      background-color:violet;
      grid-area: 6 / 5 / 8 / 6;
      background-size:cover;
      background-position:center;
      display:none !important;
      
    }

  }

  @media ${device.laptop} {
    // border:1px solid blue;
    // max-width:960px;
    

    //TITLE BOX
    div:nth-child(1) {
      grid-area:2 / 4 / 3 / 6;   
            
    }

    //DESCRIPTION TEXT
    div:nth-child(2) {
      column-count:2;
      
      
    }

    div:nth-child(3) {
      grid-area:1 / 1 / 4 / 5;
      background-size:cover;
      background-position:center;
      
      
      // border:1px solid red;
      // height:600px;
    }


  }

  @media ${device.laptopL} {
    // max-width:1200px;
  }
`


const StyledProjectGrid = styled.section`
  width:100%;
  margin:40px auto;
  div {
    img {width:100%;}
  }

  @media ${device.tablet} {
    // max-width:768px;
    max-width:100%;
    margin-top:0px;
  }
  @media ${device.laptop} {
    // max-width:960px;
    max-width:90%;

  }

  @media ${device.laptopL} {
    // max-width:1200px;
    max-width:80%;
  }
  
 
`