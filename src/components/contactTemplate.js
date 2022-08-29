import React from 'react'

const ContactTemplate = ({
  email,
  content
}) => {
  return (
    <div className='contact'>
      <a href={`mailto:${email}`}>
          <h3>{email}
        </h3>
      </a>
      <div dangerouslySetInnerHTML={{__html: content}} />
      <br /><br />
    </div>
  )
}

export default ContactTemplate