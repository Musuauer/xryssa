import React from 'react'
import PropTypes from 'prop-types'
import { Info } from '../../templates/info-page'

const InfoPagePreview = ({ widgetFor }) => (
  <Info
    content={widgetFor('body')}
  />
)

InfoPagePreview.propTypes = {
  widgetFor: PropTypes.func
}

export default InfoPagePreview
