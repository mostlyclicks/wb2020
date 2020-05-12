const path = require(`path`);
var fs = require("fs")
var dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}


const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.erros
    }
    return result
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await wrapper(
    graphql(`
    {
      prismic {
          allEmployment_opportunitys {
            edges {
              node {
                title
                _meta {
                  uid
                }
              }
            }
          }

          allNews_and_eventss {
            edges {
              node {
                title 
                _meta {
                  uid
                }
              }
            }
          }

          allTestimonials {
            edges {
              node {
                title
                testimonial_text
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    `)
  )

  const employmentOppsList = result.data.prismic.allEmployment_opportunitys.edges;
  const newsEventsList = result.data.prismic.allNews_and_eventss.edges;
  const testimonialList = result.data.prismic.allTestimonials.edges;

  const empOppsTemplate = require.resolve(`./src/templates/empOps.js`)
  const newsEventsTemplate = require.resolve(`./src/templates/newsEvents.js`)
  const testimonialTemplate = require.resolve(`./src/templates/testimonialsTemplate.js`)



  employmentOppsList.forEach(edge => {
    createPage({
      type: 'EmploymentOpportunity',
      match: '/careers/:uid',
      path: `/careers/${edge.node._meta.uid}`,
      component: empOppsTemplate,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })

  newsEventsList.forEach(edge => {
    createPage({
      type: 'NewsEvent',
      match: '/news-events/:uid',
      path: `/news-events/${edge.node._meta.uid}`,
      component: newsEventsTemplate,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })

  testimonialList.forEach(edge => {
    createPage({
      type: 'Testimonial',
      match: '/firm/testimonials/:uid',
      path: `/firm/testimonials/${edge.node._meta.uid}`,
      component: testimonialTemplate,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })

}
