import React from 'react'

const InfoTemplate = ({
  content
}) => {
  return (
    <div className='info' dangerouslySetInnerHTML={{__html: content}} />
  )
}

export default InfoTemplate