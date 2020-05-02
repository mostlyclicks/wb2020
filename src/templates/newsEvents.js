import React from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

const NewsEvents = ( {data} ) => {

    const newsEventsData = data.prismic.allNews_and_eventss.edges[0]

  return (
    <>
      <h1>{RichText.asText(newsEventsData.node.title)}</h1>
      {RichText.render(newsEventsData.node.news_event_long_description)}

    </>
  )
}

export default NewsEvents

export const query = graphql`
  query NewsEvent($uid: String) {
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
