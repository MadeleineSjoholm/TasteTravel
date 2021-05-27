/* eslint no-useless-escape: 0 */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import withAuthorization from 'components/hoc/withAuthorization'
import db from 'db'
import 'firebase/auth'
import Spinner from 'components/Spinner'

const Profile = (props) => {
  const userid = props.auth
  console.log(userid.user.uid)
  const userID = userid.user.uid
  const { isFetching } = props
  const [diet, setDiet] = useState()
  const [intolerance, setIntolerance] = useState()
  const [ingredient, setIngredient] = useState()

  db.collection("preference").doc(userID).onSnapshot((doc) => {
    const Prefs = doc.data()
    setIntolerance((Prefs.intolerances1 && Prefs.intolerances1) + (Prefs.intolerances2 && ', ' + Prefs.intolerances2) + (Prefs.intolerances3 && ', ' + Prefs.intolerances3))
    setDiet(Prefs.diet)
    setIngredient((Prefs.ingredients1 && Prefs.ingredients1) + (Prefs.ingredients2 && ', ' + Prefs.ingredients2) + (Prefs.ingredients3 && ', ' + Prefs.ingredients3))
    console.log('t1', Prefs)
  })

  const createForm = () => {
    db.collection("FavRec").doc(userID).set({
      FavoriteRecipe: ''
    })
    alert('Saved recipes are now set!')
  }

  if (isFetching) { return <Spinner /> }
  return (
    <div >
      <figure className="map_background">
        <img src="map.png" alt="Company Logo" />
      </figure>
      <div className="container">
        <div className="content-wrapper">
          <div class="profilepage">
            <h3 className=" yourprofile title has-text-grey">Your Profile</h3>
            <div className="picture">
              <figure className=" is-medium">
                <img className='img' src={userid.user.avatar} width='150' height='150' alt='desription' />
              </figure>
              <button className="faqButton">Change Profile Picture</button>
            </div>
            <div className="infoBox">
              <div align='left'>
                <h1 className="title has-text-grey"> Your Information:</h1>
                <h2 className="subtitle has-text-grey">Name: <em>{`${userid.user.fullName}`}</em></h2>
                <h2 className="subtitle has-text-grey">Email: <em>{`${userid.user.email}`}</em></h2>
                <h2 className="subtitle has-text-grey">User ID: <em>{`${userid.user.uid}`}</em></h2>
                <h2 className="subtitle has-text-grey" > <b>Preferences: </b> </h2>
                <h3 className="subtitle has-text-grey">
                  <ul>Diet : <em>{diet}</em> </ul>
                  <ul>Ingredients : <em>{ingredient}</em> </ul>
                  <ul>Intolernces : <em>{intolerance}</em> </ul>
                </h3>
                <br></br>
                <h1 className="title has-text-grey">Settings</h1>
                <p className="subtitle has-text-grey"><em>Want to update your password?</em></p>
                <Link
                  to="/ChangePassword">
                  <button className="faqButton">
                    Update Password
                  </button>
                  <br></br>
                </Link>
                <p className="subtitle has-text-grey"><em>Want to update your Preferences?</em></p>
                <Link
                  to="/Preferences">
                  <button className="faqButton">
                    Update Preferences
                  </button>
                </Link>

                <p className="subtitle has-text-grey">
                  <em>If you want to save recipes, start by clicking here! 
                  <br /> You can also reset your saved recipes by clicking on the button below!</em></p>
                <button onClick={createForm} className="faqButton">
                    Set Saved Recipes
                  </button>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuthorization(Profile)
