import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const InfoTemplate = ({
  content
}) => {
  return (
    <div className='info' dangerouslySetInnerHTML={{__html: content}} />
  )
}

const Info = ({ data }) => {
  const { markdownRemark: post } = data
  let german = false
  if (post.frontmatter.language === 'de') {
    german = true
  }

  return (
    <Layout
      german={german}>
      <InfoTemplate
        content={post.html}
      />
    </Layout>
  )
}

export default Info

export const infoPageQuery = graphql`
  query InfoQuery($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter{
        title
        language
      }
    }
  }
`
