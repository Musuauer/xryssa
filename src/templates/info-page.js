import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Info = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className='info' dangerouslySetInnerHTML={{__html: post.html}} />

    </Layout>
  )
}

export default Info

export const infoPageQuery = graphql`
  query InfoQuery {
    markdownRemark(frontmatter: {title: { eq: "Info" }}){
      html
      frontmatter{
        title
      }
    }
  }
`
