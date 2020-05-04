import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../components/media-queries"
import SideBarAddress from "../components/Subnavs/address-sidebar"


const Projects = ( {data} ) => {

  const projects = data.prismic.allProjects.edges

  return (
    <Layout>
    <ProjectWrapper>
        <ProjectHeader>
          <L2Title>
            <h1>Projects</h1>
          </L2Title>
        </ProjectHeader>
        
    <MainContent>
        
        <ProjectList>
          {projects.map(project => {
            return (
              <div>
                <h3>
                  <Link to={`/projects/${project.node._meta.uid}`}>
                    {RichText.asText(project.node.title)}

                  </Link>
                </h3>

                {project.node.body.map(({ fields }) => {
                  const firstImage = fields[0]
                  return (
                    <div className="thumbnail">
                      <img src={firstImage.image.url} alt={firstImage.image.alt} style={{ width: `100%` }} />
                    </div>
                  )
                })}
              </div>
            )
          })}
          </ProjectList>
    </MainContent>
    <L2Navigation>
          <SideBarAddress />
    </L2Navigation>
          
      </ProjectWrapper>
    </Layout>
  )

}

export default Projects


export const query = graphql`
         {
           prismic {
             allProjects(sortBy: meta_firstPublicationDate_DESC) {
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
  margin:40px auto;
  border:1px solid red;
  display:grid;
  grid-template-columns:1fr;
  grid-gap:30px;
  padding:20px;
  // div.header {
  //   width:100%;
    
  //   h1 {
  //     font-family:'IBM Plex Serif';
  //   }
  // }
  div {
    display:grid;
    grid-gap:50px;
    grid-template-row:1fr;
    h3 {margin-top:0px;
      font-family:'IBM Plex Serif';
      a {
        text-decoration:none;
        display:block;
        color:var(--orange);
        background-color:var(--darkGray);
        padding:1rem;
        &:hover {
          color:#ffffff;
          transition:.8s;
          background-color:var(--orange);
        }
      }
      grid-area:1/1/1/2;
      z-index:25;
    }
    .thumbnail {
      grid-area:1/1/2/2;
      img {
        height:300px;
        object-fit:cover;
      }
    }
  }

  @media ${device.tablet} {
    margin:40px auto;
    grid-template-columns: 1fr 1fr;
    border:1px solid green;
    
    padding:0px;
    max-width:768px;
    
    // div.header {
    //   grid-area:1/1/2/3;
    // }
    img {
      object-fit:cover !important;
    }
  }
  @media ${device.laptop} {
    grid-template-columns:1fr;
    max-width:960px;
  }
  @media ${device.laptopL} {
    max-width:1200px;
  }
`

const MainContent = styled.main`
  
  display:grid;
  
  grid-gap:40px;
  div {
    width:100%;
  }

  @media ${device.tablet} {
    grid-template-columns:1fr 1fr;
    
  }

`

const L2Navigation = styled.aside`
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

const ProjectHeader = styled.div`
  display:grid;
  grid-template-row:1fr;
  border:1px solid black;
`

const ProjectList = styled.div``