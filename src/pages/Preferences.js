/* eslint jsx-a11y/anchor-is-valid: 0 */



import React, { useState } from 'react'
import withAuthorization from 'components/hoc/withAuthorization'
import { Redirect } from 'react-router-dom'


//import { createPref } from 'actions'

const SetPref = ({auth}) => {

  const [ redirect, setRedirect ] = useState(false)
  const [ prefForm, setPrefForm ] = useState({
    diet: 'vegetarian',
    intolerance: '',
    ingredient: ''
  })


  const handleChange = e => {
    const { name, value } = e.target
    setPrefForm({...prefForm, [name]: value})
  }

  const handleSubmit = () => {
    const { user } = auth
    // createPref(prefForm, user.uid)
    //   .then(() => setRedirect(true))
    //   .catch(() => alert('SOME ERROR!'))
  }

  if (redirect) { return <Redirect to="/" />}

  return (
    <div className="create-page">
      <div className="container">
        <div className="form-container">
          <h1 className="title">Your Preferences</h1>
          <form>
            <div className="field">
              <label className="label">Diet</label>
              <div className="control">
                <div className="select">
                  <select name="diet" onChange={handleChange}>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="glutenfree">Gluten Free</option>
                    <option value="lactoveg">Lacto-Vegetarian</option>
                    <option value="ovoveg">Ovo-Vegetarian</option>
                    <option value="pescetarian">Pescetarian</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="paleo">Paleo</option>
                    <option value="primal">Primal</option>
                    <option value="whole30">Whole30</option>

                  </select>
                </div>
              </div>
            </div>
        

            <div className="field">
              <label className="label">Intolerances</label>
              <div className="control">
              <div className="select">
                  <select name="intolerance" onChange={handleChange}>
                    <option value="dairy">Dairy</option>
                    <option value="egg">Egg</option>
                    <option value="gluten">Gluten</option>
                    <option value="grain">Grain</option>
                    <option value="peanut">Peanut</option>
                    <option value="seafood">Seafood</option>
                    <option value="sesame">Sesame</option>
                    <option value="shellfish">Shellfish</option>
                    <option value="soy">Soy</option>
                    <option value="sulfite">Sulfite</option>
                    <option value="treenut">Tree Nut</option>
                    <option value="wheat">Wheat</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Exclude Ingredients</label>
              <div className="control">
                <textarea
                  onChange={handleChange}
                  name="ingredient"
                  className="textarea"
                  placeholder="Textarea"></textarea>
              </div>
            </div>
          
            <div className="field is-grouped">
              <div className="control">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="button is-link">Update Preferences</button>
              </div>
              <div className="control">
                <button className="button is-secondary">Cancel</button>
              </div>
            </div>

            <div onClick={handleSubmit}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default withAuthorization(SetPref)



// import React from 'react'
// import setPref from 'components/auth/SetPref.js'
// import { register } from 'actions'
// import { useToasts } from 'react-toast-notifications'
// import onlyGuest from 'components/hoc/onlyGuest'

// // import { withRouter } from 'react-router-dom'

// const Preferences = props => {
//   const { addToast } = useToasts()

//   return (
//     <div className="container">
//       <div className="content-wrapper">
//         <h1 className="title">Preferences</h1>
//         <p>
//           Here is the Preferences page
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Preferences

//___________________________________________________-

// /* eslint jsx-a11y/anchor-is-valid: 0 */

// import React from 'react'
// import RegisterForm from 'components/auth/RegisterForm'
// import { register } from 'actions'
// import { useToasts } from 'react-toast-notifications'
// import onlyGuest from 'components/hoc/onlyGuest'

// // import { withRouter } from 'react-router-dom'

// const Register = (props) => {
// const { addToast } = useToasts()

// const registerUser = (userData) => {
//   register(userData)
//     .then(
//       _ => () => {},
//       errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 }))
// }

// return (
//   <div className="auth-page">
//     <figure className="map_background">
//       <img src="map.png" alt="Company Logo" />
//     </figure>
//     <div className="container has-text-centered">
//       <div className="column is-4 is-offset-4">
//         <h3 className="title has-text-grey">Register</h3>
//         <p className="subtitle has-text-grey"> Let's start your TasteTravel journey!</p>
//         <div className="box">
//           <figure className="avatar">
//             <img src="logga.png" alt="Company Logo" />
//           </figure>
//           <RegisterForm onRegister={registerUser} />
//         </div>

//         <p className="has-text-grey">
//           <a>Sign In With Google</a>&nbsp;
//           <a href="/">Sign Up</a> &nbsp;·&nbsp;
//           <a href="../">Need Help?</a>
//         </p>

//       </div>
//     </div>
//   </div>
// )
// }

// // export default withRouter(Register)
// export default onlyGuest(Register)
