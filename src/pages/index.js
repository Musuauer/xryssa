import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import * as thumbnails from '../Utils/thumbnails'
// import { coverImages } from '../Utils/home'

export default class IndexPage extends React.Component {
  state ={
    open: false
  }
  componentDidMount () {
    // const imageContainer = document.querySelector('background')

    // function applyImage () {
    //   console.log('image container', imageContainer)
    //   imageContainer.style.cssText = `background: url(/img/by_reinventing_03_WEB_2880r.jpg) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; overflow: hidden;`
    // }

    // applyImage()
    // this.coverImages()
    thumbnails.addScrollListener()
  }

  // coverImages = () => {
  //   const homeImages = {
  //     640: [
  //       '/img/homepage/from_my_west_03_WEB_1068.jpg',
  //       '/img/homepage/i_have_never_17_WEB_1068.jpg',
  //       '/img/homepage/i_cant_relax_02_WEB_1068.jpg',
  //       '/img/homepage/please_turn_out_02_WEB_1068.jpg',
  //       '/img/homepage/right_and_wrong_06_WEB_1068.jpg'
  //     ],
  //     768: [
  //       '/img/homepage/from_my_west_03_WEB_1472r.jpg',
  //       '/img/homepage/i_have_never_17_WEB_1472r.jpg',
  //       '/img/homepage/i_cant_relax_02_WEB_1472r.jpg',
  //       '/img/homepage/please_turn_out_02_WEB_1472r.jpg',
  //       '/img/homepage/right_and_wrong_06_WEB_1472r.jpg'
  //     ],
  //     1068: [
  //       '/img/homepage/from_my_west_03_WEB_2136r.jpg',
  //       '/img/homepage/i_have_never_17_WEB_2136r.jpg',
  //       '/img/homepage/i_cant_relax_02_WEB_2136r.jpg',
  //       '/img/homepage/please_turn_out_02_WEB_2136r.jpg',
  //       '/img/homepage/right_and_wrong_06_WEB_2136r.jpg'
  //     ],
  //     1472: [
  //       '/img/homepage/from_my_west_03_WEB_2880r.jpg',
  //       '/img/homepage/i_have_never_17_WEB_2880r.jpg',
  //       '/img/homepage/i_cant_relax_02_WEB_2880r.jpg',
  //       '/img/homepage/please_turn_out_02_WEB_2880r.jpg',
  //       '/img/homepage/right_and_wrong_06_WEB_2880r.jpg'
  //     ]
  //   }
  //   console.log('home images', homeImages)

  //   const getAvailableImageSizes = imagesObject => Object.keys(imagesObject)

  //   const getBestSizeToUse = (sizes, screenWidth) => {
  //     for (const size of sizes) {
  //       if (screenWidth < size) return size
  //     }

  //     return sizes[sizes.length - 1]
  //   }

  //   const pickARamdomImage = images => images[Math.floor(Math.random() * images.length)]

  //   const getRandomBestResImage = images => {
  //     console.log('uno')
  //     const availableSizes = getAvailableImageSizes(images)
  //     const screenWidth = window.innerWidth
  //     const bestSize = getBestSizeToUse(availableSizes, screenWidth)

  //     return pickARamdomImage(images[bestSize])
  //   }

  //   const selectedImage = getRandomBestResImage(homeImages)
  //   const imageContainer = document.querySelector('background')

  //   function applyImage (selectedImage) {
  //     console.log('selected image', selectedImage)
  //     console.log('image container', imageContainer)
  //     imageContainer.style.cssText = `background: url(${selectedImage}) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; overflow: hidden;`
  //   }

  //   return applyImage(selectedImage)
  // }
  handleClick () {
    this.setState({
      open: !this.state.open
    })
}

  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='background'>
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
      </div>
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
