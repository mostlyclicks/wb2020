const path = require(`path`);
var fs = require("fs");
const { createParameter } = require("typescript");
var dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}


const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
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


    firstTwenty: allNews_and_eventss(sortBy: meta_firstPublicationDate_DESC, first: 20) {
      totalCount
      edges {
        node {
          title
          _meta {
            uid
          }
          date_published
        }
        cursor
      }
    }
    
    
    secondTwenty: allNews_and_eventss(sortBy: meta_firstPublicationDate_DESC, first: 20, after: "YXJyYXljb25uZWN0aW9uOjE5") {
      edges {
        node {
          title
          _meta {
            uid
          }
          date_published
        }
        cursor
      }
    }
    
    
    thirdTwenty: allNews_and_eventss(sortBy: meta_firstPublicationDate_DESC, first: 20, after: "YXJyYXljb25uZWN0aW9uOjM5") {
      edges {
        node {
          title
          _meta {
            uid
          }
          date_published
        }
        cursor
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
  
  const newsEventsList1 = result.data.prismic.firstTwenty.edges;
  const newsEventsList2 = result.data.prismic.secondTwenty.edges;
  const newsEventsList3 = result.data.prismic.thirdTwenty.edges;
  // const newsEventsList4 = result.data.prismic.fourthTwenty.edges;
  
  
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

   newsEventsList1.forEach(edge => {
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

   newsEventsList2.forEach(edge => {
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

   newsEventsList3.forEach(edge => {
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

/*

exports.createPages = async ( {actions, graphql, reporter} ) => {
  const { createPage } = actions;

  const newsResult = await graphql(`
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
  `)

  const newsEvents = newsResult.data.prismic.allNews_and_eventss.edges
  const newsEventsTemplate = require.resolve(`./src/templates/newsEvents.js`)

  newsEvents.forEach(edge => {
    createPage({
      type: 'NewsEvent',
      match: '/news-events/:uid',
      path: `/news-events/${edge.node._meta.uid}`,
      component: newsEventsTemplate,
      context: {
        uid: edge.node._meta.uid,
      }
    })
  })

}



*/




/*




//https://github.com/gatsbyjs/gatsby/issues/13589
exports.createPages = async ({ actions, graphql, reporter }) => {
  //set 'after' to nil
  let after = null

  //set first $limit to  9
  const limit = 1

  //set keepQuerying to true
  let keepQuerying = true

  //accumulate news in this array
  let allNewsPosts = []

  //while loop graphql
  //need first {limit}, after {lastcursor = ''} 
    //return uid
    //allNewsPosts = allNewsPosts.concat(DATA from query)
    //set after to lastcursor
    //if nextcursor === ''
    //then break loop

  const newsNum = await graphql(`
    query {
      prismic {
        allNews_and_eventss {
          totalCount
        }
      }
    }
  `)

  while (i < newsNum) {
    i++
    const result = await graphql(`
      query NewsPosts($limit: Int! = 1) {
        prismic {
          allNews_and_eventss(first: $limit) {
            totalCount
            edges {
              node {
                _meta {
                  uid
                }
              }
              cursor
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
          }

        }
      }
    `)
    
    reporter.info(result.data.prismic.allNews_and_eventss.edges[0].node._meta.uid)
    reporter.info(`Has next page: ${result.data.prismic.allNews_and_eventss.pageInfo.hasNextPage}`)
    // reporter.info(`UID is: ${result.data.prismic.allNews_and_eventss.edges[0].node._meta.uid}`)
    allNewsPosts = allNewsPosts.concat(result.data.prismic.allNews_and_eventss.edges.node)

    // if (result.data.prismic.allNews_and_eventss.pageInfo.hasNextPage === true) {
    //   keepQuerying = false
    // }

    //after = result.data.prismic.allNews_and_eventss.pageInfo.node.endCursor
    // reporter.info(after)
    //reporter.info(allNewsPosts.length)

    // if (result.data.prismic.allNews_and_eventss.totalCount < limit) {
    //   keepQuerying = false
    // }
  }

  //createPage using data from allNewsPosts  
  allNewsPosts.forEach(newsPost => {
    actions.createPage({
      type: 'NewsEvent',
      match: '/news-events/:uid',
      path: `/news-events/${newsPost._meta.uid}`,
      component: newsEventsTemplate,
      context: {
        uid: newsPost.node._meta.uid,
      },
    })

  })
}


  // newsEventsList.forEach(edge => {
  //   createPage({
  //     type: 'NewsEvent',
  //     match: '/news-events/:uid',
  //     path: `/news-events/${edge.node._meta.uid}`,
  //     component: newsEventsTemplate,
  //     context: {
  //       uid: edge.node._meta.uid,
  //     },
  //   })
  // })


    //   const result = await graphql(`
    //   query NewsPosts($limit: Int! = 1, $after: String) {
    //     prismic {
    //       allNews_and_eventss(first: $limit, after: $after) {
    //         totalCount
    //         edges {
    //           node {
    //             _meta {
    //               uid
    //             }
    //           }
    //           cursor
    //         }
    //         pageInfo {
    //           startCursor
    //           endCursor
    //           hasNextPage
    //           hasPreviousPage
    //         }
    //       }

    //     }
    //   }
    // `)


  //     allNewsPosts.forEach(newsPost => {
  //   actions.createPage({
  //     type: 'NewsEvent',
  //     match: '/news-events/:uid',
  //     path: `/news-events/${newsPost._meta.uid}`,
  //     component: newsEventsTemplate,
  //     context: {
  //       uid: newsPost.node._meta.uid,
  //     },
  //   })

  // })

  */