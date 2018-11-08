import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import ConnectedLayout from '../components/layout'
import * as thumbnails from '../Utils/thumbnails'
import connectWithStore from '../components/connectWithStore'

class Project extends Component {
  state= {
    linkClass: '',
    imageClass: 'project-thumbnail'
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    if (prevProps.showThumbnail !== this.props.showThumbnail) {
      return this.props.showThumbnail
    }
    return null
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.setState({
        linkClass: 'new-list-item',
        imageClass: 'slideUp'
      })
    }
  }

  render () {
    const { post, german, isDesktop } = this.props

    return (
      <div
        className='list-item'
      >
        <Link
          className='link'
          to={!german ? post.frontmatter.path : `/de${post.frontmatter.path}`}
          onMouseOver={isDesktop && thumbnails.toggleThumbVisibility}
          onMouseOut={isDesktop && thumbnails.toggleThumbVisibility}>
          {post.frontmatter.title}
        </Link>
        <Link
          to={!german ? post.frontmatter.path : `/de${post.frontmatter.path}`}
          className={this.state.linkClass}
        >
          <img
            src={post.frontmatter.thumbnail}
            className={this.state.imageClass} alt='thumbnail'
          />
        </Link>
      </div>
    )
  }
}

const Projectslist = (props) => (
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
      <ConnectedLayout>
        <div className='project-list'>
          {data.allMarkdownRemark.edges
            .map(({ node: post }, i) => (
              <Project
                key={post.id}
                german={props.german}
                post={post}
                isDesktop={props.isDesktop}
                showThumbnail={i <= props.showImageIndex && !props.isDesktop}
              />
            ))}
          {!props.isDesktop &&
            <div
              className='placeholder'
            />}
        </div>
      </ConnectedLayout>
    )}
  />
)

export default connectWithStore((state) => ({
  german: state.german
}))(Projectslist)
