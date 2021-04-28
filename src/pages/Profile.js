
import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from 'components/auth/RegisterForm'
import { register } from 'actions'
import { useToasts } from 'react-toast-notifications'
import onlyGuest from 'components/hoc/onlyGuest'

const Profile = () => {

  return (
      <div className="ProfilePage">
        <figure className="map_background">
          <img src="map.png" alt="Company Logo" />
        </figure>
        <div className="container">
          <div className="content-wrapper">
            <h1 className="title">Profile</h1>

            <div className="box">
              <figure className="avatar">
                <img src="logga.png" alt="Company Logo" />
              </figure>

            </div>

          </div>
        </div>
      </div>
  )
}

export default Profile
