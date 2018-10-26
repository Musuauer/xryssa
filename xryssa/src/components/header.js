import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (

  <div class='header'>
    <div class='name'>
      <h1>
        <Link
          to='/'
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div class='mobile-nav'>

      <div class='menu-btn' id='menu-btn'>
        <div>
          <span />
          <span />
          <span />
        </div>

      </div>

      <div class='responsive-menu close-btn'>
        <div class='menu-content'>
          <div class='menu-item current'>
            <h2>
                      Projects
            </h2>
          </div>

          <div class='menu-item'>
            <h2>
              <Link
                to='/info'
              >
          Info
              </Link>
            </h2>
          </div>

          <div class='menu-item'>
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
          <div class='de'>

            <h4>
              {/* ---insert Deutsch Link to */}
              <a href=''>de</a>
            </h4>
          </div>
        </div>
      </div>

    </div>

  </div>

)

export default Header
