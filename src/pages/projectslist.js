import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import ConnectedLayout from '../components/layout'
import * as thumbnails from '../Utils/thumbnails'
import connectWithStore from '../components/connectWithStore'

const Project = ({post, german, projectIndex, showImageIndex, isDesktop}) => {
  return (
    <div
      className='list-item'
    >
      <Link
        className='link'
        to={!german ? post.frontmatter.path : `/de${post.frontmatter.path}`}
        onMouseOver={thumbnails.toggleThumbVisibility}
        onMouseOut={thumbnails.toggleThumbVisibility}>
        {post.frontmatter.title}
      </Link>
      <Link
        to={!german ? post.frontmatter.path : `/de${post.frontmatter.path}`}
        className={projectIndex <= showImageIndex && !isDesktop && 'new-list-item'}
      >
        <img
          src={post.frontmatter.thumbnail}
          className={projectIndex <= showImageIndex && !isDesktop ? 'slideUp' : 'project-thumbnail'} alt='thumbnail'
        />
      </Link>
    </div>
  )
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
                projectIndex={i}
                showImageIndex={props.showImageIndex}
                isDesktop={props.isDesktop}
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
