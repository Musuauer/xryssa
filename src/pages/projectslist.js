import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import * as thumbnails from '../Utils/thumbnails'

const Projectslist = () => (
  <StaticQuery
    query={
      graphql`
  query allProjectsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___order] },
      filter: { frontmatter: { templateKey: { eq: "project" } }}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            templateKey
            thumbnail
          }
        }
      }
    }
  }
`
    }
    render={data => (
      <Layout>
        {console.log('projectsdata:', data)}
        <div className='project-list'>
          {data.allMarkdownRemark.edges
            .map(({ node: post }) => (
              <div
                className='list-item'
                key={post.id}
              >
                <Link className='link' to={post.frontmatter.path} onMouseOver={thumbnails.toggleThumbVisibility} onMouseOut={thumbnails.toggleThumbVisibility}>
                  {post.frontmatter.title}
                </Link>
                <Link to={post.frontmatter.path}>
                  <img src={post.frontmatter.thumbnail} className='project-thumbnail' alt='thumbnail' />
                </Link>

              </div>
            ))}
        </div>

      </Layout>
    )}
  />
)

export default Projectslist
