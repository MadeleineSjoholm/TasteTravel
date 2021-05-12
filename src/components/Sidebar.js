/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title"> MENU </div>
        <a className="sidebar-close">
          <i className="fa fa-times-circle"></i>
        </a>
      </div>

      <div className="inner">
      <div className='category-sidebar-buttons'>
        <ul className="sidebar-menu">
        <button className="nav-section-title">
        <li>
         <a href="/preferences"><img src="preferences.png" width="40" height="40" alt='list'/><br></br>PREFERENCES</a>
         </li>
        </button>

        <br></br>
        <button className="nav-section-title">
        <li>
        <a href="/mostPopular"><img src="stars.png" width="50" height="20" alt='stars' /><br></br>MOST POPULAR</a>
        </li>
        </button>

        <br></br>
        <button className="nav-section-title">
        <li>
        <a href="/savedRecipes"><img src="heart.png" width="50" height="50" alt='heart' /><br></br>SAVED RECIPES</a>        
        </li>
        </button>

        <br></br>
        <button className="nav-section-title">
        <li>
        <a href="/onBoard"><img src="help.png" width="30" height="30" alt='question mark' /><br/>HOW DOES IT WORK?</a>
        </li>
        </button>
        </ul>
      </div>
      </div>
    </div>


  )
}

export default Sidebar