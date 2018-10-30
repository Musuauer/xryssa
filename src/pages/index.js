import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as thumbnails from '../Utils/thumbnails'
import { coverImages } from '../Utils/coverImages'
import styled from 'styled-components'

const CoverImage = styled.div`
background: url(${props => props.randomImage}) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; overflow: hidden; z-index: 99999; height: 100vh;
`
export default class IndexPage extends React.Component {
  state= {
    showImage: true,
    coverImages: [],
    randomImage: ''
  }

  componentDidMount () {
    this.setState(
      { coverImages },
      () => this.shuffleNow()
    )

    thumbnails.addScrollListener()
  }

  shuffleNow = () => {
    const coverImagesCopy = this.state.coverImages.slice(0)
    const shuffledImages = this.shuffle(coverImagesCopy)
    this.setState({ randomImage: shuffledImages[0] })
  }

 shuffle = (array) => {
   let currentIndex = array.length
   let temporaryValue, randomIndex

   while (currentIndex !== 0) {
     randomIndex = Math.floor(Math.random() * currentIndex)
     currentIndex -= 1
     temporaryValue = array[currentIndex]
     array[currentIndex] = array[randomIndex]
     array[randomIndex] = temporaryValue
   }
   return array
 }

 removeImage = () => {
   console.log('removeimage')
   this.setState({
     showImage: false,
     randomImage: ''
   })
 }

 render () {
   const { data } = this.props
   const { edges: posts } = data.allMarkdownRemark

   return (
     <React.Fragment>
       {this.state.showImage ? (
         <CoverImage
           className='cover-image'
           randomImage={this.state.randomImage}
           onClick={this.removeImage}
         />
       )
         : (
           (
             <Layout>
               <div className='project-list'>
                 {posts
                   .map(({ node: post }) => (
                     <div
                       className='list-item'
                       key={post.id}
                     >

                       <Link className='link' to={post.frontmatter.path} onMouseOver={thumbnails.toggleThumbVisibility} onMouseOut={thumbnails.toggleThumbVisibility}>
                         {post.frontmatter.title}
                       </Link>
                       <Link to={post.frontmatter.path}>
                         <img src={post.frontmatter.thumbnail} className='project-thumbnail' alt='thumbnail' />
                       </Link>

                     </div>
                   ))}
               </div>

             </Layout>
           )
         )
       }

     </React.Fragment>
   )
 }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___order] },
      filter: { frontmatter: { templateKey: { eq: "project" } }}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            templateKey
            thumbnail
          }
        }
      }
    }
  }
`
