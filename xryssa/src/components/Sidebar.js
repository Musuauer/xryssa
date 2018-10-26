import React from 'react'
import { Link } from 'gatsby'

const Sidebar = () => {
  const pages = ['Projects', 'Info', 'Contact']
  return (
    <div className='menu menu-project'>
      {pages.map(page =>
        (<div className='menu-item'
          key={page}>
          <h2>
            <Link
              to={`/${page}`}
              activeClassName='current'
            >
              {page}
            </Link>
          </h2>
        </div>
        )
      )}

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
