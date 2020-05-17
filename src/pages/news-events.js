import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../components/media-queries"
import SideBarAddress from "../components/Subnavs/address-sidebar"
import bgImg from "../images/BuildingAerial.jpg"



const NewsEvents = ( {data} ) => {

  const newsEvents = data.prismic.allNews_and_eventss.edges

  return (
    <Layout>
    <NewsWrapper>
      <L2MainImage>
        <L2Title>
          <h1>News & Events</h1>
        </L2Title>
      </L2MainImage>
      <MainContent>
        <NewsList>
        {newsEvents.map(article => {
          return (
            
            <Link to={`/news-events/${article.node._meta.uid}`}>
            <ArticleItem>
              <h3>{RichText.asText(article.node.title)}</h3>
              <img src={article.node.thumbnail.url} alt={article.node.thumbnail.alt} />
            </ArticleItem>
            </Link>
            
          )
        })}
        </NewsList>
        <L2Navigation>
          <SideBarAddress />
        </L2Navigation>
      </MainContent>
      </NewsWrapper>
    </Layout>
  )
}

export default NewsEvents


// get list of all news-events

export const query = graphql`
{
  prismic {
    allNews_and_eventss {
      edges {
        node {
          title
          _meta {
            uid
          }
          thumbnail
        }
      }
    }
  }
}
`

const NewsWrapper = styled.div`

`
const L2MainImage = styled.section`
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


const MainContent = styled.section`
    width:100%;
    margin:80px auto;
    display:grid;
    grid-template-columns:1fr;
    @media ${device.tablet} {
      grid-template-columns:2fr 1fr;
      max-width:768px;
    } 
    @media ${device.laptop} {
      grid-template-columns:3fr 1fr;
      max-width:960px;
    }
    @media ${device.laptopL} {
      max-width:1200px;
    }  
`

const NewsList = styled.div`
    
    @media ${device.tablet} {

      max-width:768px;
    } 
    @media ${device.laptop} {
      max-width:960px;
    }
    @media ${device.laptopL} {
      max-width:1200px;
    } 
`

const L2Navigation = styled.aside`

`

const ArticleItem = styled.div`
  margin: 40px 20px 80px 20px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);

  padding: 0px 0 20px 0;
  h3 {
    font-family: "IBM Plex Serif";
    display: flex;
    justify-content: flex-end;
    order: 2;
    align-self: center;
    padding-left: 1rem;
    a {
      color: var(--darkGray);
      text-decoration: none;
      padding: 1rem;
      &:hover {
        color: var(--orange);
        transition: 0.5s;
        background-color: var(--darkGray);
        border-bottom: 3px solid var(--orange);
        margin-bottom: -3px;
      }
    }
  }
  img {
    display: flex;
    justify-content: flex-start;
    height: 160px;
    width: 250px;
    object-fit: cover;
    border: 1px solid #cdcdcd;
    order: 1;
    margin: -30px 0px 0 30px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
  }
`