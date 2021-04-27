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
        <h1> EJ KLAR </h1>
          <div className="circle">Step 1
          </div>
          <p> Put in your preferences. Here you can... </p>
          <Link
            to="/Preferences">
            <button>
                Go to Preferences
            </button>
          </Link>
          <div className="circle">Step 2
          </div>
          <p> Choose where you want to travel. Click on the map... </p>
          <button> Go to Map</button>
          <div className="circle">Step 3
          </div>
          <p> Get your matching recipes and start coocking!... </p>
        </div>
      </div>
    </div>
  )
}


export default Help
