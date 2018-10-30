import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (

  <div className='header'>
    <div className='name'>
      <h1>
        <Link
          to='/'
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className='mobile-nav'>

      <div className='menu-btn' id='menu-btn'>
        <div>
          <span />
          <span />
          <span />
        </div>

      </div>

      <div className='responsive-menu close-btn'>
        <div className='menu-content'>
          <div className='menu-item current'>
            <h2>
                      Projects
            </h2>
          </div>

          <div className='menu-item'>
            <h2>
              <Link
                to='/info'
              >
          Info
              </Link>
            </h2>
          </div>

          <div className='menu-item'>
            <h2>
              <Link
                to='/contact'
              >
         Contact
              </Link>
            </h2>
          </div>
          <br />
          <br />
          <div className='de'>

            <h4>
              {/* ---insert Deutsch Link to */}
              {/* <a href=''>de</a> */}
            </h4>
          </div>
        </div>
      </div>

    </div>

  </div>

)

export default Header
