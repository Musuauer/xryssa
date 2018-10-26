import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as thumbnails from '../Utils/thumbnails'

export default class IndexPage extends React.Component {
  componentDidMount () {
    thumbnails.addScrollListener()
  }

  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div className='project-list'>
          {posts
            .map(({ node: post }) => (
              <div
                className='list-item'
                key={post.id}
              >

                <Link className='link' to={post.frontmatter.path} onMouseOver={thumbnails.toggleThumbVisibility} onMouseOut={thumbnails.toggleThumbVisibility}>
                  {post.frontmatter.title}
                </Link>
                <Link to={post.frontmatter.path}>
                  <img src={post.frontmatter.thumbnail} className='project-thumbnail' />
                </Link>

              </div>
            ))}
        </div>

      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
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
