import React from 'react'
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../../components/layout"



const Testimonials = ( {data} ) => {

  const testimonialList = data.prismic.allTestimonials.edges
  const testimonialCount = data.prismic.allTestimonials.totalCount

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const singleTestimonial = data.prismic.allTestimonials.edges[getRandomInt(testimonialCount)]
  
  return (
    <Layout>
      <h1>Testimonials</h1>
      <p>{RichText.asText(singleTestimonial.node.title)}</p>
      
      <ul>
        {testimonialList.map(quote => {
          return (
            <li>
              <Link to={`/firm/testimonials/${quote.node._meta.uid}`}>
                {RichText.asText(quote.node.title)} -{" "}
                {RichText.asText(quote.node.person_quoted)}
              </Link>
              {RichText.asText(quote.node.testimonial_text)}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Testimonials

export const query = graphql`
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

`