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
           <ProjectsList />
         )
       }
     </React.Fragment>
   )
 }
}
