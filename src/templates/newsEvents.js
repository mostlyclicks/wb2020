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

    

      
        
      {/*
        {newsEventImages.map(({fields}) => {

          return (
            <>
              {fields.map((field, index) => {
                return (
                  <div id={index}>
                    <img src={field.imagesSharp.childImageSharp.fluid.srcWebp} alt={field.image.alt} />
                  </div>
                )
              })}
            </>
          )


        })}
        */}


    </>
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
          body {
            ... on PRISMIC_News_and_eventsBodyNews_event_images {
              type
              label
              fields {
                imagesSharp {
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
