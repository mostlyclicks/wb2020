import React from "react"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../../components/layout"
import "../../components/layout.css"
import { device } from "../../components/media-queries"
import bgImg from "../../images/DJI_0027.jpg"
import bgImg2 from "../../images/trust-partnership-excellence.png"
import MainSubnav from "../../components/Subnavs/main-subnav"

const LodgingMultiDwelling = ({data}) => {

  const CatProjects = data.prismic.allProjects.edges

  return (
    <Layout>
      <ProjectWrapper>
        <L2MainImage>
          <L2Title>
            <h1>Lodging/Multi-Dwelling</h1>
          </L2Title>
        </L2MainImage>
        <MainContent>
          <ProjectList>
            {CatProjects.map(proj => {
              return (
                <ProjectItem>
                  <h3>
                    <Link to={`/projects/${proj.node._meta.uid}`}>
                      {RichText.asText(proj.node.title)}
                    </Link>
                  </h3>
                  {proj.node.body.map(({ fields }) => {
                    const firstImage = fields[0]
                    return (
                      <div className="thumbnail">
                        {firstImage.image &&
                          <img src={firstImage.image.url} alt={firstImage.image.alt} style={{ width: `100%` }} />
                        }
                      </div>
                    )
                  })}
                </ProjectItem>
              )
            })}
          </ProjectList>
          <L2Navigation>
            <MainSubnav subnav="projectcat" />
          </L2Navigation>
        </MainContent>
      </ProjectWrapper>
    </Layout>
  )
}

export default LodgingMultiDwelling

export const LodgeMultiDwelling = graphql`
         query {
           prismic {
             allProjects(tags: "lodging multi-dwelling") {
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
  background-image:url(${bgImg2});
  background-repeat:no-repeat;
  background-position-x:100%;
  background-position-y:470px;
  background-size:40%;
`

const L2MainImage = styled.div`
  background-image:url(${bgImg});
  display:flex;
  justify-content:flex-start;
  align-items:flex-end;
  height:500px;
  width:100%;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  margin-top:-200px;
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

const MainContent = styled.main`
    display:grid;
    grid-template-columns:1fr;
    margin-top:80px;
    padding:20px;
    grid-gap:20px;
  }

  @media ${device.tablet} {
    margin:80px auto;
    grid-template-columns: 2fr 1fr;
    padding:0px;
    max-width:768px;
  }
  @media ${device.laptop} {
    grid-template-columns:3fr 1fr ;
    max-width:960px;
  }
  @media ${device.laptopL} {
    max-width:1200px;
  }
`

const ProjectList = styled.div`
  display:grid;
  grid-template-columns:1fr;
  grid-gap:50px;
  @media ${device.tablet} {
    grid-template-columns:1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns:1fr 1fr;
  }
  @media ${device.laptopL} {
    grid-template-columns:1fr 1fr;
  }
`

const L2Navigation = styled.aside`
  display: flex;
  flex-direction: column;

  padding-top: 0px;
  ul {
    background-color:rgba(0,0,0,.08);
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
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
      &:hover {
        background-color:rgba(0,0,0,.3);
        transition:.5s;
        color:#ffffff;
      }
    }
  }
`

const ProjectItem = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-row: 1fr;
  h3 {
    margin-top: 0px;
    font-family: 'IBM Plex Serif';
    a {
      text-decoration: none;
      display: block;
      color: var(--orange);
      background-color: var(--darkGray);
      padding: 1rem;
            &: hover {
        color:#ffffff;
        transition: .8s;
        background-color: var(--orange);
      }
    }
    grid-area: 1 / 1 / 1 / 2;
    z-index: 1;
  }
      .thumbnail {
    grid-area: 1 / 1 / 2 / 2;
    img {
      height: 300px;
      object-fit: cover;
    }

`