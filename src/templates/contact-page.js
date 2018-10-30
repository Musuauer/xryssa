import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Contact = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('data:', post)
  return (
    <Layout>
      <div className='contact'>
        <a href={`mailto:${post.frontmatter.email}`}>
          <h3>{post.frontmatter.email}
          </h3>
        </a>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
        <br /><br />
      </div>
    </Layout>
  )
}

export default Contact

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: {title: { eq: "Contact" }}){
      html
      frontmatter{
        email
      }
    }
  }
`
