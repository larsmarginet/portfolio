const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const workTemplate = path.resolve(`./src/templates/work-template.js`)
  const result = await graphql(
    `
    {
        allContentfulCase {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const cases = result.data.allContentfulCase.edges

  cases.forEach((work) => {

    createPage({
      path: `/work/${work.node.slug}/`,
      component: workTemplate,
      context: {
        id: work.node.id,
      },
    })
  })
}
