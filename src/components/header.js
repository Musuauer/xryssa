import React from 'react'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'

export default class IndexPage extends React.Component {
  state = {
    open: false
  }
  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    return (
      <div className='header'>
        <div className='name'>
          <h1>
            <Link
              to='/'
            >
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>
        <div className='mobile-nav'>

          <div className='menu-btn' id='menu-btn'>
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick}
              width={28}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
            />

          </div>

          {this.state.open === true &&
          (
            <div className='responsive-menu close-btn'>
              <div className='menu-content'>
                <div className='menu-item'>
                  <h2>
                    <Link
                      to='/projectslist'
                    >
          Projects
                    </Link>
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
                    <Link
                      to='/de'
                    >
          de
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          )
          }

        </div>

      </div>

    )
  }
}
