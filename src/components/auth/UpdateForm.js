/* eslint no-useless-escape: 0 */

import React from 'react'
import useForm from 'react-hook-form'
import firebase from 'firebase/app'
import 'firebase/auth'
import withAuthorization from 'components/hoc/withAuthorization'

const UpdateForm = () => {

  const { errors } = useForm()
  const user = firebase.auth().currentUser
 
 
  const handleChange = e => {
    const {Name, value} = e.target
    console.log({[Name]: value})
    user.updatePassword(value) 
  }
  
  const updateUserProfileSubmit = () => {
    alert('Password as been updated successfully!')
  }

  return (
    <form >
      <div className="field">
        <div className="control">
          <input 
            name="email"
            className="input is-large"
            type="email"
            placeholder= { user.email }
            autoComplete="email" />
          { errors.email &&
            <div className="form-error">
              { errors.email.type === 'required' && <span className="help is-danger">Email is required</span> }
              { errors.email.type === 'pattern' && <span className="help is-danger">Email address is not valid</span> }
            </div>
          }
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className='password'>
          <input 
                 onChange={handleChange}
                 name="password"
                 password = 'password'
                 className="input is-large"
                 type="password"
                 placeholder="Your New Password"
                 autoComplete="current-password" />
          { errors.password &&
            <div className="form-error">
             { errors.password.type === 'required' && <span className="help is-danger">Password is required</span> }
             { errors.password.type === 'minLength' && <span className="help is-danger">Minimum length is 6 characters</span> }
            </div>
          }
        </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input 
                 name="passwordConfirmation"
                 className="input is-large"
                 type="password"
                 placeholder="Confirm New Password"
                 autoComplete="current-password" />
          { errors.passwordConfirmation &&
            <div className="form-error">
              { errors.passwordConfirmation.type === 'required' && <span className="help is-danger">Password confirmation is required</span> }
              { errors.passwordConfirmation.type === 'minLength' && <span className="help is-danger">Minimum length is 6 characters</span> }
              { errors.passwordConfirmation.type === 'sameAs' && <span className="help is-danger">Password confirmation is not the same as password</span> }
            </div>
          }
        </div>
      </div>
      <button
        type="submit"
        onClick={updateUserProfileSubmit}
        className="button is-block rounded secondary-btn raised is-large is-fullwidth">Update info</button>
    </form>
  )
}

export default withAuthorization(UpdateForm)
