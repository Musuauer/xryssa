import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import ConnectedLayout from '../components/layout'
import * as thumbnails from '../Utils/thumbnails'
import connectWithStore from '../components/connectWithStore'

class Project extends Component {
  state= {
    showImageIndex: -1,
    showThumbnail: false,
    linkClass: '',
    imageClass: 'project-thumbnail'
  }

  componentDidMount () {
    if (window.innerWidth < 1200) {
      window.addEventListener('scroll', this.highlightImages)
    }
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    if (prevState.showThumbnail !== this.state.showThumbnail) {
      return this.state.showThumbnail
    }
    return null
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.setState({
        linkClass: 'new-list-item',
        imageClass: 'slideUp'
      })
    }
  }

  highlightImages = () => {
    console.log('highlihgtimages')
    const divHeight = 280
    var scrollBarPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    const increment = scrollBarPosition * (0.005)
    const currentImageIndex = Math.floor(scrollBarPosition / (divHeight + increment))

    // if (scrollBarPosition < 40) {
    //   this.setState({ showImageIndex: -1 })
    // } else {
    //   this.setState({ showImageIndex: currentImageIndex })
    // }
    // if (this.props.projectIndex <= this.state.showImageIndex && this.state.isDesktop){

    // }
    if (scrollBarPosition > 40 && this.props.projectIndex <= currentImageIndex) {
      this.setState({ showThumbnail: true })
    }
  }

  render () {
    const { post, german } = this.props

    return (
      <div
        className='list-item'
      >
        <Link
          className='link'
          to={!german ? post.frontmatter.path : `/de${post.frontmatter.path}`}
          onMouseOver={thumbnails.toggleThumbVisibility}
          onMouseOut={thumbnails.toggleThumbVisibility}>
          {post.frontmatter.title}
        </Link>
        <Link
          to={!german ? post.frontmatter.path : `/de${post.frontmatter.path}`}
          className={this.state.linkClass}
        >
          <img
            src={post.frontmatter.thumbnail}
            className={this.state.imageClass} alt='thumbnail'
          />
        </Link>
      </div>
    )
  }
}

const Projectslist = (props) => (
  <StaticQuery
    query={
      graphql`
  query allProjectsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___order] },
      filter: { frontmatter: { templateKey: { eq: "project" }, language: { eq: "en" } }}
    ) {
      edges {
        node {
          id
          frontmatter {
            language
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
    }
    render={data => (
      <ConnectedLayout>
        <div className='project-list'>
          {data.allMarkdownRemark.edges
            .map(({ node: post }, i) => (
              <Project
                key={post.id}
                german={props.german}
                post={post}
                projectIndex={i}
              />
            ))}
          {!props.isDesktop &&
            <div
              className='placeholder'
            />}
        </div>
      </ConnectedLayout>
    )}
  />
)

export default connectWithStore((state) => ({
  german: state.german
}))(Projectslist)
