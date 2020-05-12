import React from "react"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"
//// import Image from 'gatsby-image'
import { device } from "../components/media-queries"

export const query = graphql`
  query ProjectQuery($uid: String) {
    prismic {
      allProjects(uid: $uid) {
        edges {
          node {
            _meta {
              uid
            }
            title
            location
            long_description
            body {
              ... on PRISMIC_ProjectBodyImage {
                type
                label
                fields {
                  image
                  imageSharp {
                    childImageSharp {
                      fluid {
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
                <Link to="/projects">Back to Projects</Link>
              </div>

              {proj.node.body.map(({ fields }) => {
                return (
                  <>
                    {fields.map((field, index) => {
                      return (
                        <div id={index} className="box">
                        
                          <img src={field.imageSharp.childImageSharp.fluid.srcWebp} alt={field.image.url} />
                        
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


const StyledProjectGrid = styled.section`
  width:100%;
  div {
    img {width:100%;}
  }

  @media ${device.tablet} {

  }
  @media ${device.laptop} {
   
  }
  @media ${device.laptopL} {
    
  }
`

const MainDiv = styled.div`
  
  display:inline-grid;
  // grid-gap:20px;
  // padding:20px;
  margin-bottom:20px;
  h1 {font-family:'IBM Plex Serif';}
    h3 {
      font-family:'Open Sans';
      font-weight:400;
  }


  div:nth-child(1) {
      // border-top:3px solid var(--orange);
      display:inline-grid;
      color:var(--orange);
      // background-color: var(--darkGray);
      background-color:black;
    // order:1;
      padding:1rem;
      width:100%;
      padding-top:150px;
      height:20vh;
      margin-top:-150px;
      // grid-area:1/1/3/6;
    }
  div:nth-child(2) {
    padding:1rem;
  }

  @media ${device.tablet} {
    display:grid;
    grid-gap:10px;
    grid-auto-rows:min-content;
    padding:0px;
    // grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    // grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
    margin-top:-170px;
    div {
      img {
        height:100%;
        width:100%;
        object-fit:cover;
      }
    }
    
    div:nth-child(1) {
      border-top:3px solid var(--orange);
      // margin:20px;
      color:var(--orange);
      background-color: var(--darkGray);
      order:1;
      padding:1rem;
      grid-area:1  / 4 / 2 / 5 ;
      height:55%;
      width:80%;
      margin-top:20vh;
    }

    div:nth-child(2) {
      order:2;
      grid-area:3 / 1 / 4 / 2 ;
      padding:1rem 2rem;
      font-family:'Open Sans';
      font-weight:400;
      
    }

    //MAIN IMAGE
    div:nth-child(3) {
      grid-area:1 / 1 / 3 / 6 ;
    
    }

    div:nth-child(4) {
      grid-area:3 / 2 / 4 / 6 ;
      
    }
    div:nth-child(5) {
      
    }
    div:nth-child(6) {
      
      img {
      
        overflow:none;

      }
      
    }
    div:nth-child(7) {
      // border:1px solid red;
    }
  }
  @media ${device.laptop} {
    div:nth-child(1) {
    grid-area:1  / 3 / 2 / 6 ;

  }
  }
  

  
`


