import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import styled from "styled-components"
import { device } from "../components/media-queries"
import SideBarAddress from "../components/Subnavs/address-sidebar"

const NewsEvents = ( {data} ) => {

  const newsEventsData = data.prismic.allNews_and_eventss.edges[0]

  return (
    <Layout>
      <NewsEventWrapper>
        <NewsMain>
          <h1>{RichText.asText(newsEventsData.node.title)}</h1>
          {RichText.render(newsEventsData.node.news_event_long_description)}
        </NewsMain>
        <NewsNav>
          <SideBarAddress />
        </NewsNav>
      </NewsEventWrapper>
    </Layout>
  )
}

export default NewsEvents

export const query = graphql`
  query NewsQuery($uid: String) {
  prismic {
    allNews_and_eventss(uid: $uid) {
      edges {
        node {
          title
          news_event_long_description
        }
      }
    }
  }
}
`
const NewsEventWrapper = styled.section`
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

const NewsMain = styled.div`
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

const NewsNav = styled.aside``