import React from 'react'

import ProjectsList from './projectslist'
import * as thumbnails from '../Utils/thumbnails'
import { coverImages } from '../constants/coverImages'
import styled from 'styled-components'

const CoverImage = styled.div`
background: url(${props => props.randomImage}) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; overflow: hidden; z-index: 99999; height: 100vh;
`
export default class IndexPage extends React.Component {
  state= {
    showImage: true,
    coverImages: [],
    randomImage: '',
    german: false
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

 changeLanguage = () => {
   console.log('changelanguagecalled')
   this.setState({
     german: !this.state.german
   })
 }

 render () {
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
           <ProjectsList
            //  data={this.props.data.allMarkdownRemark.edges}
             german={this.state.german}
             changeLanguage={this.changeLanguage}
           />

         )
       }
     </React.Fragment>
   )
 }
}

// export const ProjectsQuery = graphql`
// query allProjectsQuery {
// allMarkdownRemark(
//   sort: { order: DESC, fields: [frontmatter___order] },
//   filter: { frontmatter: {
//     templateKey: { eq: "project" },
//     language: { eq: "en" }
//   }}
// ) {
//   edges {
//     node {
//       id
//       frontmatter {
//         title
//         path
//         templateKey
//         thumbnail
//       }
//     }
//   }
// }
// }
// `
