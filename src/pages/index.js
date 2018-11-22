import React from 'react'
import { coverImages } from '../constants/coverImages'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import '../pages/style.css'

const CoverImage = styled.div`
background: url(${props => props.randomImage}) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; overflow: hidden; z-index: 99999; height: 100vh;
`
export default class IndexPage extends React.Component {
  state= {
    coverImages: [],
    randomImage: ''
  }

  componentDidMount () {
    this.setState(
      { coverImages },
      () => this.shuffleNow()
    )
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

 changeLanguage = () => {
   this.setState({
     german: !this.state.german
   })
 }

 render () {
   return (
     <CoverImage
       className='cover-image'
       randomImage={this.state.randomImage}
       onClick={() => navigate('/projectslist')}
       role='link'
       tabIndex='0'
     />
   )
 }
}
