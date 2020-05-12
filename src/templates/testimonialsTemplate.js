import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from "prismic-reactjs"
//import styled from "styled-components"

const Testimonials = ( {data} ) => {

  const testimonialData = data.prismic.allTestimonials.edges[0]

  return (
    <>
      <h1>{RichText.asText(testimonialData.node.title)}</h1>
    </>
  )
}

export default Testimonials

export const query = graphql`
  query TestimonialQuery($uid: String) {
    prismic {
      allTestimonials(uid: $uid) {
        edges {
          node {
            title
            person_quoted
            testimonial_text
          }
        }
      }
    }
  }
`

