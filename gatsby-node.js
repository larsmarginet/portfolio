// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const work = path.resolve(`./src/templates/work.js`)
//   const result = await graphql(
//     `
//     {
//         allContentfulCase {
//           edges {
//             node {
//               id
//               title
//             }
//           }
//         }
//     }
//     `
//   )

//   if (result.errors) {
//     throw result.errors
//   }

//   // Create blog posts pages.
//   const posts = result.data.allContentfulCase.edges

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node

//     createPage({
//       path: post.node.slug,
//       component: work,
//       context: {
//         id: post.node.id,
//         previous,
//         next,
//       },
//     })
//   })
// }
