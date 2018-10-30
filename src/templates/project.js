import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const ProjectTemplate = ({
  images,
  title,
  path,
  media,
  year,
  location,
  duration,
  description,
  performers,
  documentation,
  extra1,
  extra2
}) => {
  return (
    <React.Fragment>
      <div className='project'>
        <div className='project-header'>
          <h3 className='project-name'>{title}</h3>
          <div className='project-info'>
            <p>{media}, {year}</p>
            <p>{location}</p>
            {duration && <p>Duration: {duration}</p>}
          </div>
        </div>

        <div className='project-text'>
          <p>
            {description}
          </p>
        </div>

        <div className='project-credit'>
          {performers && <p>Performers: {performers}</p>}
          <p>{documentation}</p>
          <p>{extra1}</p>
          <p>{extra2}</p>
        </div>

      </div>

      <div className='photos-container'
        dangerouslySetInnerHTML={{__html: images}} />
    </React.Fragment>
  )
}

ProjectTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

const Project = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('DATA:', data)

  return (
    <Layout>
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
        extra1={post.frontmatter.extra1}
        extra2={post.frontmatter.extra2}
      />
    </Layout>
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
        title
        path
        media
        year
        location
        duration
        description
        performers
        documentation
        extra1
        extra2
      }
    }
  }
`
