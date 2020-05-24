import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { RichText } from "prismic-reactjs"

const RandomTestimonial = () => {

  return (
    <StaticQuery
      query={graphql`
        {
          prismic {
            allTestimonials {
              totalCount
              edges {
                node {
                  title
                  person_quoted
                  testimonial_text
                  _meta {
                    uid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {

        
        const testimonialCount = data.prismic.allTestimonials.totalCount

        const getRandomInt = max => {
          return Math.floor(Math.random() * Math.floor(max))
        }

        const singleTestimonial =
          data.prismic.allTestimonials.edges[getRandomInt(testimonialCount)]


        
        return (
          <div>
            <h1>{RichText.asText(singleTestimonial.node.title)}</h1>
            <p>{RichText.asText(singleTestimonial.node.testimonial_text)}</p>
          </div>
        )}}
      

    />
  )
}

export default RandomTestimonial