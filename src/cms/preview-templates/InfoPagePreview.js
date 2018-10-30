import React from 'react'
import PropTypes from 'prop-types'
import { InfoTemplate } from '../../templates/info-page'

const InfoPagePreview = ({ widgetFor }) => (
  <InfoTemplate
    content={widgetFor('body')}
  />
)

InfoPagePreview.propTypes = {
  widgetFor: PropTypes.func
}

export default InfoPagePreview
