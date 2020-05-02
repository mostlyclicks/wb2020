const path = require(`path`);


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
        }
      }
    `)
  )

  const employmentOppsList = result.data.prismic.allEmployment_opportunitys.edges;

  const empOppsTemplate = require.resolve(`./src/templates/empOps.js`)

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

}
