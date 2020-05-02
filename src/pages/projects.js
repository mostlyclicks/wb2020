import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../components/media-queries"


const Projects = ( {data} ) => {

  const projects = data.prismic.allProjects.edges

  return (
    <Layout>
    <ProjectWrapper>
      <h1>Projects</h1>
      {projects.map(project => {
        return (
          <>
            <h3>
              <Link to={`/projects/${project.node._meta.uid}`}>
                {RichText.asText(project.node.title)}
                
              </Link>
            </h3> 

            {project.node.body.map(({fields}) => {
              const firstImage = fields[0]
              return (
                <div>
                  <img src={firstImage.image.url} alt={firstImage.image.alt} style={{ width: `300px` }}/>
                </div>              
              )
            })}
          </>
        )
      })}
      </ProjectWrapper>
    </Layout>
  )

}

export default Projects


export const query = graphql`
         {
           prismic {
             allProjects {
               edges {
                 node {
                   title
                   _meta {
                     uid
                   }
                   body {
                     ... on PRISMIC_ProjectBodyImage {
                       fields {
                         image
                       }
                     }
                   }
                   
                 }
               }
             }
           }
         }
       `

const ProjectWrapper = styled.section`
  padding:20px;

  @media ${device.tablet} {
    padding:0px;
    max-width:768px;
    margin:0 auto;
  }
  @media ${device.laptop} {
    max-width:960px;
  }
  @media ${device.laptopL} {
    max-width:1200px;
  }
`