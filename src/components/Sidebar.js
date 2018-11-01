import React from 'react'
import { Link } from 'gatsby'

const Sidebar = ({ german, changeLanguage }) => {
  console.log('chan func', changeLanguage)
  return (
    <div className='menu menu-project'>
      <div className='menu-item'
      >
        <h2>
          <Link
            to={!german ? '/projectslist' : '/de/projectslist'}
            activeClassName='current'
          >
            {!german ? 'Projects' : 'Projekte' }
          </Link>
        </h2>
      </div>

      <div className='menu-item'
      >
        <h2>
          <Link
            to={!german ? '/info' : '/de/info'}
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
            to={!german ? '/contact' : '/de/kontakt'}
            activeClassName='current'
          >
            {!german ? 'Contact' : 'Kontakt' }
          </Link>
        </h2>
      </div>

      <div className='de'
        onClick={changeLanguage}>
        <div className='menu-item'
        >
          <h2>
            {!german ? 'de' : 'en'}
          </h2>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
