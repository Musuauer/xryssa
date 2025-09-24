const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemarkFrontmatter {
      title: String
      language: String
      templateKey: String
      path: String
      order: String
      thumbnail: String
      media: String
      year: String
      location: String
      duration: String
      description: String
      performers: String
      documentation: String
      extra1: String
      extra2: String
      Extra1: String
      Extra2: String
      email: String
    }
  `

  createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark{
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      createPage({
        path: edge.node.frontmatter.path,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        )
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
