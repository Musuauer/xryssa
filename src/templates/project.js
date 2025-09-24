import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ConnectedLayout from '../components/layout'
import ProjectTemplate from '../components/projectTemplate'

const Project = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <ConnectedLayout>

      <ProjectTemplate
        images={post.html}
        title={post.frontmatter.title}
        path={post.frontmatter.path}
        media={post.frontmatter.media}
        year={post.frontmatter.year}
        location={post.frontmatter.location}
        duration={post.frontmatter.duration}
        description={post.frontmatter.description}
        performers={post.frontmatter.performers}
        documentation={post.frontmatter.documentation}
        extra1={post.frontmatter.Extra1}
        extra2={post.frontmatter.Extra2}
      />
    </ConnectedLayout>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default Project

export const pageQuery = graphql`
  query ProjectEnglish($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        language
        title
        path
        media
        year
        location
        duration
        description
        performers
        documentation
        Extra1
        Extra2
      }
    }
  }
`
