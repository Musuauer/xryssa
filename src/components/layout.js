import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import { connect } from 'react-redux'
import { handleToggle } from '../state/action'

import '../pages/style.css'
class Layout extends Component {
  toggleLanguage = () => {
    console.log('call togglelang')
    this.props.dispatch(handleToggle())
  }
  render () {
    return (
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
            {console.log('layout props:', this.props.german)}
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
              german={this.props.german}
              toggleLanguage={this.toggleLanguage}
            />
            {this.props.children}
          </div>

        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default connect(
  state => ({ german: state.german })
)(Layout)
