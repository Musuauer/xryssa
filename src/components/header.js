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
                      activeClassName='current'
                      onClick={this.handleClick}
                    >
                      {!this.props.german ? 'Projects' : 'Projekte' }
                    </Link>
                  </h2>
                </div>

                <div className='menu-item'>
                  <h2>
                    <Link
                      to={!this.props.german ? '/info' : '/de/info'}
                      activeClassName='current'
                    >
                      Info
                    </Link>
                  </h2>
                </div>

                <div className='menu-item'>
                  <h2>
                    <Link
                      to={!this.props.german ? '/contact' : '/de/kontakt'}
                      activeClassName='current'
                    >
                      {!this.props.german ? 'Contact' : 'Kontakt' }
                    </Link>
                  </h2>
                </div>
                <br />
                <br />
                <div className='de'
                  onClick={this.props.toggleLanguage}>
                  <div className='menu-item'
                  >

                    <h2 >
                      {!this.props.german ? 'de' : 'en'}
                    </h2>

                  </div>
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
