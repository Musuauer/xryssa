import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as thumbnails from '../Utils/thumbnails'

const Projectslist = ( props ) => (
  <StaticQuery
    query={
      graphql`
  query allProjectsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___order] },
      filter: { frontmatter: { templateKey: { eq: "project" }, language: { eq: "en" } }}
    ) {
      edges {
        node {
          id
          frontmatter {
            language
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
      <Layout
        german={props.german}
        changeLanguage={props.changeLanguage}>

        <div className='project-list'>
          {data.allMarkdownRemark.edges
            .map(({ node: post }) => (
              <div
                className='list-item'
                key={post.id}
              >
                <Link
                  className='link'
                  to={!props.german ? post.frontmatter.path : `/de${post.frontmatter.path}`}
                  onMouseOver={thumbnails.toggleThumbVisibility}
                  onMouseOut={thumbnails.toggleThumbVisibility}>
                  {post.frontmatter.title}
                </Link>
                <Link
                  to={!props.german ? post.frontmatter.path : `/de${post.frontmatter.path}`}
                >
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
