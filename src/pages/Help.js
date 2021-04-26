/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'

//import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { Redirect } from 'react-router-dom'
import onlyGuest from 'components/hoc/onlyGuest'


const Help = () => {
  return (

    <div className="container">
      <figure className="map_background">
        <img src="map.png" alt="Company Logo" />
      </figure>
      <div className="content-wrapper">
        <h1 className="title">How does it work?</h1>
        <div className="text-area">
          <h2>
            How to travel to your recipe:
          </h2>
          <div className="circle">Step 1
          </div>
        </div>
      </div>
    </div>
  )
}


export default Help
