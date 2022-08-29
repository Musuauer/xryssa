import React from 'react'
import { graphql } from 'gatsby'
import ConnectedLayout from '../components/layout'
import InfoTemplate from '../components/infoTemplate'

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
