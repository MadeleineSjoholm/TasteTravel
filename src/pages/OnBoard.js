/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'

//import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { Redirect } from 'react-router-dom'
import onlyGuest from 'components/hoc/onlyGuest'


const OnBoard = () => {
  return (

    <div className="container">
      <figure className="map_background">
        <img src="map.png" alt="Company Logo" />
      </figure>
      <div className="content-wrapper">
        <h1 className="title">I am OnBoard page</h1>
        <p>
          Here is all the OnBoarding information that you need
        </p>
      </div>
    </div>
  )
}


export default OnBoard
