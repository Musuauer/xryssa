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

  return (
    <Layout>
      <InfoTemplate
        content={post.html}
      />
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
