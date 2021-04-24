/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title"> MENU  </div>
        <a className="sidebar-close">
          <i className="fa fa-times-circle"></i>
        </a>
      </div>
      <div className="inner">
        <ul className="sidebar-menu">

      <div className='category-sidebar-buttons'>
        <button>
        <li><span className="nav-section-title"></span></li>
         <a href="/preferences"><img src="preferences.png" width="30" height="30" alt='description'/><br/>PREFERENCES</a>
        </button>
        <br></br>
        <button >
        <li><span className="nav-section-title"></span></li>
        <a href="/mostPopular"> MOST POPULAR</a> <img src="stars.png" width="40" height="40" alt='description' />
        </button>
        <br></br>
        <button >
        <li><span className="nav-section-title"></span></li>
        <a href="/savedRecipes"><img src="saved.png" width="40" height="40" alt='description' /><br/>SAVED RECIPES</a>        
        </button>
      </div>

{/*
          <li className="have-children"><a href="#"><img src="help.png" width="20" height="20" alt='description' /><br/>HELP</a>
            <ul>
              <li><a href="#">Account settings</a></li>
              <li><a href="/onBoard">How does it work?</a></li>
            </ul>
  </li> 
*/}
          </ul>
        </div>
    </div>
  )
}

export default Sidebar
