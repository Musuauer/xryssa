import React from 'react'
import { graphql } from 'gatsby'
import ConnectedLayout from '../components/layout'

export const InfoTemplate = ({
  content
}) => {
  return (
    <div className='info' dangerouslySetInnerHTML={{__html: content}} />
  )
}

const Info = ({ data, props }) => {
  const { markdownRemark: post } = data

  return (
    <ConnectedLayout>
      <InfoTemplate
        content={post.html}
      />
    </ConnectedLayout>
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
