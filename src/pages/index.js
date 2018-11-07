import React from 'react'
import ProjectsList from './projectslist'
import { coverImages } from '../constants/coverImages'
import styled from 'styled-components'

const CoverImage = styled.div`
background: url(${props => props.randomImage}) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; overflow: hidden; z-index: 99999; height: 100vh;
`
export default class IndexPage extends React.Component {
  state= {
    showImage: true,
    showImageIndex: -1,
    coverImages: [],
    randomImage: '',
    isDesktop: true
  }

  componentDidMount () {
    console.log('hi')
    this.setState(
      { coverImages },
      () => this.shuffleNow()
    )

    if (window.innerWidth < 1200) {
      this.setState({ isDesktop: false })
      window.addEventListener('scroll', this.highlightImages)
    }
  }

  shuffleNow = () => {
    const coverImagesCopy = this.state.coverImages.slice(0)
    const shuffledImages = this.shuffle(coverImagesCopy)
    this.setState({ randomImage: shuffledImages[0] })
  }

  setShowImageIndex = newShowImageIndex => {
    this.setState({showImageIndex: newShowImageIndex})
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
   this.setState({
     showImage: false,
     randomImage: ''
   })
 }

 changeLanguage = () => {
   this.setState({
     german: !this.state.german
   })
 }

 highlightImages = () => {
   const divHeight = 280
   var scrollBarPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
   const increment = scrollBarPosition * (0.005)
   const currentImageIndex = Math.floor(scrollBarPosition / (divHeight + increment))

   if (scrollBarPosition < 40) {
     this.setState({ showImageIndex: -1 })
   } else {
     this.setState({ showImageIndex: currentImageIndex })
   }
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
             showImageIndex={this.state.showImageIndex}
             isDesktop={this.isDesktop} />

         )
       }
     </React.Fragment>
   )
 }
}
