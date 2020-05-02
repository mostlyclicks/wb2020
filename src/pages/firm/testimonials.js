import React from 'react'
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../../components/layout"



const Testimonials = ( {data} ) => {

  const testimonialList = data.prismic.allTestimonials.edges

  return (
    <Layout>
    <h1>Testimonials</h1>
      <ul>
        {testimonialList.map(quote => {
          return (
            <li>
              <Link to={`/firm/testimonials/${quote.node._meta.uid}`}>{RichText.asText(quote.node.title)} - {RichText.asText(quote.node.person_quoted)}</Link>
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