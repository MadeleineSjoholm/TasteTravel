
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

            <div class="grid-container">
              <div class="item1">1</div>
              <div class="item2">2</div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Profile
