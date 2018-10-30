import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../../templates/contact-page'

const ContactPagePreview = ({ entry, widgetFor }) => (
  <Contact
    email={entry.getIn(['data', 'email'])}
    content={widgetFor('body')}
  />
)

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default ContactPagePreview
