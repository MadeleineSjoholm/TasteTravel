/* /* eslint jsx-a11y/anchor-is-valid: 0 */


import React, { useState } from 'react'
import withAuthorization from 'components/hoc/withAuthorization'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'
import { ingredientOpt, intoleranceOpt } from 'docs/data'

import { createPreference } from 'actions'
import { useHistory } from "react-router-dom";


  const SetPref = ({ auth }) => {

  const [redirect, setRedirect] = useState(false)
  const [prefForm, setPrefForm] = useState({
    diet: 'vegetarian',
    intolerance: 'none',
    ingredient: ''
  })


  const handleChange = e => {
    const { name, value } = e.target
    setPrefForm({...prefForm, [name]: value})
    console.log(name, value)
    console.log(intoleranceOpt.value, ingredientOpt.name)
  }

  const handleSubmit = () => {
    const { user } = auth
    createPreference(prefForm, user.uid)
      .then(() => setRedirect(true))
      .catch(() => alert('SOME ERROR!'))
  }

  const history = useHistory()


  if (redirect) { return <Redirect to="/" /> }
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
              <label className="label">Intolerance</label>
              <div className="control">
                <Select
                  value={intoleranceOpt.value}
                  // onChange={handleChange}
                  isMulti
                  name="intolerance"
                  options={intoleranceOpt}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
                
              </div>
            </div>

            {/* <div className="field">
              <label className="label">Intolerances</label>
              <div className="control">
                <div className="select">
                  <select name="intolerance" onChange={handleChange}>
                  <option value="">None</option>
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
            </div> */}
            
         
            <div className="field">
              <label className="label">Exclude Ingredients</label>
              <div className="control">
                <Select

                  // onChange={handleChange}
                  defaultValue={''}
                  isMulti
                  name="ingredient"
                  options={ingredientOpt}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
                
              </div>
            </div>
            
            {/* <div className="radio">
              <label className="label">Test</label>
              <div className="control">

              <label>
                  <input type="radio" value="option1" checked={true} />
                  Option 1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" />
                  Option 2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" />
                  Option 3
                </label>
                           
              </div>
              </div> */}
            

            <div className="field is-grouped">
              <div className="control">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="button is-link">Update Preferences</button>
              </div>
              <div className="control">
                <button 
                onClick={()=> history.push("/")}
                className="button is-secondary" >Cancel</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default withAuthorization(SetPref)

