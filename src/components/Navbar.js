/*eslint jsx-a11y/anchor-is-valid: 0*/

// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {

  const { user, isAuth } = props.auth
  const { loadFresh } = props

  useEffect(() => {
    if (!loadFresh) { return }

    const script = document.createElement('script')
    script.src = `${process.env.PUBLIC_URL}/js/fresh.js`
    script.async = true
    document.body.appendChild(script)
  }, [loadFresh])


  return (
    <nav
      id={props.id || ''}
      className="navbar is-fresh is-transparent no-shadow"
      role="navigation"
      aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/nylogg.png'} alt='logo' />
          </div>
          <Link
            to="/"
            className="navbar-item">
            <div className="title">TasteTravel</div>
          </Link>
          <a className="navbar-item is-hidden-desktop is-hidden-tablet">
            <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{ visibility: 'visible' }}>
              <svg width="1000px" height="1000px">
                <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                <path className="path2" d="M 300 500 L 700 500"></path>
                <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
              </svg>
              <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
            </div>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar-menu" className="navbar-menu is-static">
          <div className="navbar-start">
            <a className="navbar-item is-hidden-mobile">
              <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{ visibility: 'visible' }}>
                <svg width="1000px" height="1000px">
                  <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                  <path className="path2" d="M 300 500 L 700 500"></path>
                  <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                </svg>
                <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
              </div>
            </a>
          </div>
          <div className="navbar-end">
            {isAuth &&
              <div className="navbar-item">
                {`Hi ${user.fullName}`}
              </div>
            }
            <Link
              to="/"
              className="navbar-item is-secondary">
              HOME
            </Link>
            <Link
              to="/faq"
              className="navbar-item is-secondary">
              FAQ
            </Link>
            {!isAuth &&
              <React.Fragment>
                <Link
                  to="/login"
                  className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="navbar-item">
                  <span className="button signup-button rounded secondary-btn raised">
                    Register
                  </span>
                </Link>
              </React.Fragment>
            }
            {isAuth &&
              <Link
                to="/OnBoard"
                className="navbar-item is-secondary">
                ONBOARD
              </Link>
            }
            {isAuth &&
              <Link
                to="/profile"
                className="navbar-item">
                <span className="button signup-button rounded secondary-btn raised">
                  Profile
                </span>
              </Link>
            }
            {isAuth &&
              <Link
                to="/logout"
                className="navbar-item">
                <span className="button signup-button rounded redish raised">
                  Logout
                </span>
              </Link>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
