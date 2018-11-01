import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'

import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../pages/style.css'

const Layout = ({ children, german, changeLanguage }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (

      <div className='grid'>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'My work is based on speech performances and testimonial actions. It promotes the concept of intimacy with the audience where the body of the artist and those of the participants/collaborators are the subject and, simultaneously, the transmitting mechanism of the work.' },
            { name: 'keywords', content: 'contemporary, art, performance, berlin, greece' }
          ]}
        >
          <html lang='en' />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Sidebar
          german={german}
          changeLanguage={changeLanguage}
        />
        {children}
      </div>

    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
