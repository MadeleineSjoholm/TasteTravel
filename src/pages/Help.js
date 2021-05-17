/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <div className="container">
      <figure className="map_background">
        <img src="map.png" alt="Company Logo" />
      </figure>
      <div className="content-wrapper">
        <h1 className="title">How does it work?</h1>
        <div className="text-area">

          <div className="circle1">Step 1</div>
          <p className="step1"> Put in your preferences. Here you can specify your allergies or food you don't like. </p>
          <Link
                      to="/Preferences">
                      <button className="onBoardButton1">
                          Go to Preferences
                      </button>
           </Link>
          <div className="circle2">Step 2</div>
          <p className= "step2"> Choose where you want to travel. Click on a country on the map and travel to that region.</p>

          <Link
            to="/">
            <button className="onBoardButton2">
                Go to Map
            </button>
            </Link>

          <div className="circle3">Step 3</div>
          <p className="step3"> Get your matching recipes and start coocking! The recipes you will see matches your preferences. </p>
        </div>
      </div>
    </div>
  )
}

export default Help
