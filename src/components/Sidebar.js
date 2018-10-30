import React from 'react'
import { Link } from 'gatsby'

const Sidebar = () => {
  return (
    <div className='menu menu-project'>
      <div className='menu-item'
      >
        <h2>
          <Link
            to='/'
            activeClassName='current'
          >
            Projects
          </Link>
        </h2>
      </div>

      <div className='menu-item'
      >
        <h2>
          <Link
            to='/info'
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
            to='/contact'
            activeClassName='current'
          >
            Contact
          </Link>
        </h2>
      </div>

      <div className='de'>

        <h4>
          <Link
            to='/de'
          >
         de
          </Link>
        </h4>
      </div>

    </div>

  )
}

export default Sidebar
