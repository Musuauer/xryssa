import React from 'react'
import { graphql } from 'gatsby'
import ConnectedLayout from '../components/layout'
import ContactTemplate from '../components/contactTemplate'

const Contact = ({ data, props }) => {
  const { markdownRemark: post } = data

  return (
    <ConnectedLayout>
      <ContactTemplate
        content={post.html}
        email={post.frontmatter.email}
      />
    </ConnectedLayout>
  )
}

export default Contact

export const aboutPageQuery = graphql`
query aboutQuery($path: String!){
  markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter{
        language
        email
      }
    }
  }
`
