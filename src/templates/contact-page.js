import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const ContactTemplate = ({
  email,
  content
}) => {
  return (
    <div className='contact'>
      <a href={`mailto:${email}`}>
        <h3>{email}
        </h3>
      </a>
      <div dangerouslySetInnerHTML={{__html: content}} />
      <br /><br />
    </div>
  )
}

const Contact = ({ data }) => {
  const { markdownRemark: post } = data
  let german = false
  if (post.frontmatter.language === 'de') {
    german = true
  }

  return (
    <Layout
      german={german}>
      <ContactTemplate
        content={post.html}
        email={post.frontmatter.email}
      />
    </Layout>
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
