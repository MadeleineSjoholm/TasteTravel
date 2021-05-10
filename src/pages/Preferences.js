/* /* eslint jsx-a11y/anchor-is-valid: 0 */


import React, { useState } from 'react'
import withAuthorization from 'components/hoc/withAuthorization'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'
import { ingredientOpt, intoleranceOpt } from 'docs/data'

import { createPreference } from 'actions'
import { useHistory } from "react-router-dom"
import diet from 'docs/diet'



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
    console.log()
  }

  const handleSubmit = () => {
    const { user } = auth
    createPreference(prefForm, user.uid)
      .then(() => setRedirect(true))
      .catch(() => alert('SOME ERROR!'))
  }

  const history = useHistory()
  const labels = diet.Labels


  if (redirect) { return <Redirect to="/" /> }

  return (
    <div className="create-page">
      <section className="section is-medium">
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
      </section>

      <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="diet-wrapper has-text-centered">
            <h3 className="title is-3">Learn more about diets </h3>
              <h3 className="title is-muted is-4 ">Vegetarian </h3>
              <h4 className="subtitle is-6 is-2 ">{ labels.vegetarian }</h4>
              <h3 className="title is-4">Vegan</h3>
              <h4 className="subtitle is-6 is-2">{ labels.vegan }</h4>
              <h3 className="title is-4">Gluten Free </h3>
              <h4 className="subtitle is-6 is-2">{ labels.gluten }</h4>
              <h3 className="title is-4">Lacto-Vegetarian</h3>
              <h4 className="subtitle is-6 is-2">{ labels.lacto }</h4>
              <h3 className="title is-4">Ovo-vegetarian </h3>
              <h4 className="subtitle is-6 is-2">{ labels.ovo }</h4>
              <h3 className="title is-4">Pescetarian</h3>
              <h4 className="subtitle is-6 is-2">{ labels.pesc }</h4>
              <h3 className="title is-4">Ketogenic </h3>
              <h4 className="subtitle is-6 is-2">{ labels.keto }</h4>
              <h3 className="title is-4">Paleo</h3>
              <h4 className="subtitle is-6 is-2">{ labels.paleo }</h4>
              <h3 className="title is-4">Primal </h3>
              <h4 className="subtitle is-6 is-2">{ labels.primal }</h4>
              <h3 className="title is-4">Whole 30</h3>
              <h4 className="subtitle is-6 is-2">{ labels.whole }</h4>
              
              <div className="divider is-centered"></div>
              
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">
              </div>
            </div>
          </div>
        </section>

    </div>



  )
}

export default withAuthorization(SetPref)

