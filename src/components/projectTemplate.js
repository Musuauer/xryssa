import React from 'react'
import PropTypes from 'prop-types'

const ProjectTemplate = ({
  images,
  title,
  path,
  media,
  year,
  location,
  duration,
  description,
  performers,
  documentation,
  extra1,
  extra2
}) => {
  return (
    <React.Fragment>
      <div className='project'>
        <div className='project-header'>
          <h3 className='project-name'>{title}</h3>
          <div className='project-info'>
            <p>{media}, {year}</p>
            <p>{location}</p>
            {duration && <p>Duration: {duration}</p>}
          </div>
        </div>

        <div className='project-text'>
          <p>
            {description}
          </p>
        </div>

        <div className='project-credit'>
          {performers && <p>Performers: {performers}</p>}
          {documentation && <p>{documentation}</p>}
          {extra1 && <p>{extra1}</p>}
          {extra2 && <p>{extra2}</p>}
        </div>

      </div>

      <div className='photos-container'
        dangerouslySetInnerHTML={{__html: images}} />

    </React.Fragment>
  )
}

export default ProjectTemplate

ProjectTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}