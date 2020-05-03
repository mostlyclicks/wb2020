import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"



const NewsEvents = ( {data} ) => {

  const newsEvents = data.prismic.allNews_and_eventss.edges

  return (
    <Layout>
      <h1>News & Events</h1>
      {newsEvents.map(article => {
        return (
          <ArticleItem>
            <h3><Link to={`/news-events/${article.node._meta.uid}`}>{RichText.asText(article.node.title)}</Link></h3>
            <img src={article.node.thumbnail.url} alt={article.node.thumbnail.alt} />
          </ArticleItem>
        )
      })}
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

const ArticleItem = styled.div`
  margin:20px 40px 20px 40px;
    display:flex;
    flex-direction:row;
    border-bottom:1px solid #ededed;
    padding:0px 0 20px 0;
    h3 {
      font-family:'IBM Plex Serif';
      display:flex;
      justify-content:flex-end;
      order:2;
      align-self:center;
      padding-left:1rem;
      a {
        color:var(--darkGray);
        text-decoration:none;
        padding:1rem;
        
        &:hover {
          color:var(--orange);
          transition:.5s;
          background-color:var(--darkGray);
          border-bottom:3px solid var(--orange);
          margin-bottom:-3px;
          
        }
      }
    }
    img {
      display:flex;
      justify-content:flex-start;
      height:150px;
      width:150px;
      object-fit:cover;
      border:1px solid #cdcdcd;
      order:1;
    }
`