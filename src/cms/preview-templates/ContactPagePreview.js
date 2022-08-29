import React from 'react'
import PropTypes from 'prop-types'
import ContactTemplate from '../../components/contactTemplate'

const ContactPagePreview = ({ entry, widgetFor }) => (
  <ContactTemplate
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
