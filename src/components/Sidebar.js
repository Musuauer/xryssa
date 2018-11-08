import React, { Component } from 'react'
import { Link } from 'gatsby'

class Sidebar extends Component {
  render () {
    return (
      <div className='menu menu-project'>
        <div className='menu-item'
        >
          <h2>
            <Link
              to='/projectslist'
              activeClassName='current'
            >
              {!this.props.german ? 'Projects' : 'Projekte' }
            </Link>
          </h2>
        </div>

        <div className='menu-item'
        >
          <h2>
            <Link
              to={!this.props.german ? '/info' : '/de/info'}
              activeClassName='current'
            >
              Info
            </Link>
          </h2>
        </div>

        <div className='menu-item'
        >
          <h2>
            <Link
              to={!this.props.german ? '/contact' : '/de/kontakt'}
              activeClassName='current'
            >
              {!this.props.german ? 'Contact' : 'Kontakt' }
            </Link>
          </h2>
        </div>

        <div className='de'
          onClick={this.props.toggleLanguage}>
          <div className='menu-item'
          >
            <Link
              to='/projectslist'
              activeClassName='current'
            >
              <h2 >
                {!this.props.german ? 'de' : 'en'}
              </h2>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Sidebar
