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
         <a href="/preferences"><img src={process.env.PUBLIC_URL + '/preferences.svg'} alt='Preferences' width="40" height="40" /><br/>PREFERENCES</a>
         </li>
        </button>
        <br/>
        <button className="nav-section-title">
        <li>
        <a href="/mostPopular"><img src={process.env.PUBLIC_URL + '/stars.svg'} alt='Rating' width="40" height="40" /><br/>MOST POPULAR</a>
        </li>
        </button>
        <br/>
        <button  className="nav-section-title">
        <li>
        <a href="/savedRecipes">
        <img src={process.env.PUBLIC_URL + '/heart.svg'} alt='Saved' width="40" height="40" /><br/>SAVED RECIPES</a>
        </li>
        </button>
        <br/>
        <button className="nav-section-title">
        <li>
        <a href="/onBoard"><img src={process.env.PUBLIC_URL + '/help.svg'} alt='Help' width="30" height="30" /><br/>HOW DOES IT WORK?</a>
        </li>
        </button>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
