import React from 'react'
import PropTypes from 'prop-types'
import { ProjectTemplate } from '../../templates/project'

const ProjectPagePreview = ({ entry, widgetFor }) => (
  <ProjectTemplate
    images={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    path={entry.getIn(['data', 'path'])}
    media={entry.getIn(['data', 'media'])}
    year={entry.getIn(['data', 'year'])}
    location={entry.getIn(['data', 'location'])}
    duration={entry.getIn(['data', 'duration'])}
    description={entry.getIn(['data', 'year'])}
    performers={entry.getIn(['data', 'performers'])}
    documentation={entry.getIn(['data', 'documentation'])}
    extra1={entry.getIn(['data', 'extra1'])}
    extra2={entry.getIn(['data', 'year'])}
  />
)

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default ProjectPagePreview
