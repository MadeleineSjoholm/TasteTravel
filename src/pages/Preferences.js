/* /* eslint jsx-a11y/anchor-is-valid: 0 */


import React, { useState } from 'react'
import withAuthorization from 'components/hoc/withAuthorization'
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import diet from 'docs/diet'
import db from 'db'
import 'firebase/auth'



  const Preferences = ({ auth }) => {
    const userid  = auth
    console.log(userid.user.uid)
    const userID = userid.user.uid

  const [redirect, setRedirect] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    console.log({ [name]: value })
    db.collection("preference").doc(userID).update({
      [name]: value
    })
  }

  const createEmptyForm = () => {
    const userid  = auth
    console.log(userid.user.uid)
    const userID = userid.user.uid
    db.collection("preference").doc(userID).set({
      diet: "",
      ingredients1: "",
      ingredients2: "",
      ingredients3: "",
      intolerances1: "",
      intolerances2: "",
      intolerances3: ""
  })
  alert('Reset Succesfull, now you can set your new ones!')
  }


  const handleSubmit = () => {
    const { user } = auth
    alert('updated Succesfully')
  }

  const history = useHistory()
  const labels = diet.Labels


  if (redirect) { return <Redirect to="/" /> }

  return (
    <div className="create-page">

    <figure className="map_background2">
      <img src="map.png" alt="Company Logo" />
    </figure>

      <section className="section is-small">



      <div className="container ">
        <div className="form-container">
          <h1 className="title">Your Preferences</h1>
          <form>
             <button
                  onClick={createEmptyForm}
                  type="button"
                  className="button secondary-btn raised" >Click here to reset you preferences!</button>
            <div className="field">
              <label className="label">Diet</label>
              <div className="control">
                <div className="select">
                  <select name="diet" onChange={handleChange}>
                    <option value="-"> No diet </option>
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

            <label className="label">Intolerances</label>
            <div class="intolerances">

            <div className="field">
              <div className="control">
                <div className="select">
                  <select name="intolerances1" onChange={handleChange}>
                  <option value="-"> No more intolerances </option>
                    <option value="dairy"> Dairy </option>
                    <option value= 'egg'> Egg </option>
                    <option value= 'gluten'> Gluten </option>
                    <option value= 'grain'> Grain </option>
                    <option value= 'peanut'> Peanut </option>
                    <option value= 'seafood'> Seafood </option>
                    <option value= 'sesame'>  Sesame</option>
                    <option value= 'shellfish'>Shellfish </option>
                    <option value= 'soy'> Soy </option>
                    <option value= 'sulfite'> Sulfite </option>
                    <option value= 'treenut'> Tree Nut </option>
                    <option value= 'wheat'> Wheat </option>
                  </select>

                </div>
              </div>
            </div>



            <div className="field">
              <div className="control">
                <div className="select">
                  <select name="intolerances2" onChange={handleChange}>
                    <option value="-"> No more intolerances </option>
                    <option value="dairy"> Dairy </option>
                    <option value= 'egg'> Egg </option>
                    <option value= 'gluten'> Gluten </option>
                    <option value= 'grain'> Grain </option>
                    <option value= 'peanut'> Peanut </option>
                    <option value= 'seafood'> Seafood </option>
                    <option value= 'sesame'>  Sesame</option>
                    <option value= 'shellfish'>Shellfish </option>
                    <option value= 'soy'> Soy </option>
                    <option value= 'sulfite'> Sulfite </option>
                    <option value= 'treenut'> Tree Nut </option>
                    <option value= 'wheat'> Wheat </option>
                  </select>

                </div>
              </div>
            </div>



            <div className="field">
              <div className="control">
                <div className="select">
                  <select name="intolerances3" onChange={handleChange}>
                    <option value="-"> No more intolerances </option>
                    <option value="dairy"> Dairy </option>
                    <option value= 'egg'> Egg </option>
                    <option value= 'gluten'> Gluten </option>
                    <option value= 'grain'> Grain </option>
                    <option value= 'peanut'> Peanut </option>
                    <option value= 'seafood'> Seafood </option>
                    <option value= 'sesame'>  Sesame</option>
                    <option value= 'shellfish'>Shellfish </option>
                    <option value= 'soy'> Soy </option>
                    <option value= 'sulfite'> Sulfite </option>
                    <option value= 'treenut'> Tree Nut </option>
                    <option value= 'wheat'> Wheat </option>
                  </select>

                </div>
              </div>
            </div>
            </div>

            <label className="label">Ingredients</label>
            <div class="intolerances">

            <div className="field">
              <div className="control">
                <div className="select">

                  <select name="ingredients1" onChange={handleChange}>
                   <option value="-"> No more ingredients </option>
                   <option value="onion"> Onion </option>
                   <option value='mushroom'> Mushrooms</option>
                   <option value= 'celery'> Celery</option>
                   <option value= 'fish'> Fish </option>
                   <option value= 'tomato'> Tomatoes </option>
                   <option value= 'broccoli'> Broccoli </option>
                   <option value= 'tofu'> Tofu </option>
                   <option value= 'avocado'> Avocado </option>
                   <option value= 'olives'> Olives </option>
                   <option value= 'beets'> Beets </option>
                   <option value= 'cilantro'> Cilantro</option>
                   <option value= 'eggplant'> Eggplant</option>
                   <option value= 'pineapple'> Pineapple </option>
                   <option value= 'ginger'> Ginger </option>
                   <option value= 'mayonnaise'> Mayonnaise </option>
                   <option value= 'mustard'> Mustard </option>
                   <option value= 'corn'> Corn </option>
                   <option value= 'tuna'> Tuna </option>
                   <option value= 'pickles'> Pickles </option>
                   <option value= 'coriander'> Coriander </option>
                   <option value= 'anchovis'> Anchovis </option>
                   <option value= 'arugula'> Arugula </option>
                   <option value= 'apple'> Apples </option>
                   <option value= 'banana'> Banana </option>
                   <option value= 'beans'> Beans </option>
                   <option value= 'cauliflower'> Cauliflower </option>
                   <option value= 'chicken'> Chicken </option>
                   <option value= 'beef'> Beef </option>
                   <option value= 'milk'> Milk </option>
                   <option value= 'cheese'> Cheese </option>
                   <option value= 'lettuce'> Lettuce </option>
                   <option value= 'garlic'> Garlic </option>
                   <option value= 'paprika'> Paprika </option>
                   <option value= 'spinach'> Spinach </option>
                   <option value= 'chili'> Chili Peppers </option>
                   <option value= 'cucumber'> Cucumber </option>
                   <option value= 'potato'> Potato </option>
                   <option value= 'jalapeno'> Jalapeno </option>
                   <option value= 'zucchini'> Zucchini </option>
                   <option value= 'asparagus'> Asparagus </option>
                   <option value= 'rice'> Rice </option>
                   <option value= 'pasta'> Pasta </option>
                   <option value= 'quinoa'> Quinoa </option>
                   <option value= 'honey'> Honey </option>
                   <option value= 'fennel'> Fennel </option>
                   <option value= 'oats'> Oats </option>
                   <option value= 'yeast'> yeast </option>
                   <option value= 'goatcheese'> Goat Cheese </option>
                   <option value= 'mozzarella'> Mozzarella </option>
                   <option value= 'tortillas'> Tortillas </option>
                   <option value= 'cayenne'> Cayenne </option>
                   <option value= 'aniseed'> Aniseed </option>
                   <option value= 'bacon'> Bacon </option>
                   <option value= 'turkey'> Turkey </option>
                   <option value= 'pork'> Pork </option>
                   <option value= 'lamb'> Lamb </option>
                   <option value= 'cod'> Cod </option>
                   <option value= 'salmon'> Salmon </option>
                   <option value= 'ketchup'> Ketchup </option>
                   <option value= 'oil'> Olive Oil </option>
                   <option value= 'soya'> Soya Sauce </option>
                   <option value= 'peas'> Peas </option>
                   <option value= 'butter'> Butter </option>
                   <option value= 'margarine'> Margarine </option>
                   <option value= 'cream'> Cream</option>


                  </select>

                </div>
              </div>
            </div>

            <div className="field">

              <div className="control">
                <div className="select">

                  <select name="ingredients2" onChange={handleChange}>
                  <option value="-"> No more ingredients </option>
                  <option value="onion"> Onion </option>
                   <option value='mushroom'> Mushrooms</option>
                   <option value= 'celery'> Celery</option>
                   <option value= 'fish'> Fish </option>
                   <option value= 'tomato'> Tomatoes </option>
                   <option value= 'broccoli'> Broccoli </option>
                   <option value= 'tofu'> Tofu </option>
                   <option value= 'avocado'> Avocado </option>
                   <option value= 'olives'> Olives </option>
                   <option value= 'beets'> Beets </option>
                   <option value= 'cilantro'> Cilantro</option>
                   <option value= 'eggplant'> Eggplant</option>
                   <option value= 'pineapple'> Pineapple </option>
                   <option value= 'ginger'> Ginger </option>
                   <option value= 'mayonnaise'> Mayonnaise </option>
                   <option value= 'mustard'> Mustard </option>
                   <option value= 'corn'> Corn </option>
                   <option value= 'tuna'> Tuna </option>
                   <option value= 'pickles'> Pickles </option>
                   <option value= 'coriander'> Coriander </option>
                   <option value= 'anchovis'> Anchovis </option>
                   <option value= 'arugula'> Arugula </option>
                   <option value= 'apple'> Apples </option>
                   <option value= 'banana'> Banana </option>
                   <option value= 'beans'> Beans </option>
                   <option value= 'cauliflower'> Cauliflower </option>
                   <option value= 'chicken'> Chicken </option>
                   <option value= 'beef'> Beef </option>
                   <option value= 'milk'> Milk </option>
                   <option value= 'cheese'> Cheese </option>
                   <option value= 'lettuce'> Lettuce </option>
                   <option value= 'garlic'> Garlic </option>
                   <option value= 'paprika'> Paprika </option>
                   <option value= 'spinach'> Spinach </option>
                   <option value= 'chili'> Chili Peppers </option>
                   <option value= 'cucumber'> Cucumber </option>
                   <option value= 'potato'> Potato </option>
                   <option value= 'jalapeno'> Jalapeno </option>
                   <option value= 'zucchini'> Zucchini </option>
                   <option value= 'asparagus'> Asparagus </option>
                   <option value= 'rice'> Rice </option>
                   <option value= 'pasta'> Pasta </option>
                   <option value= 'quinoa'> Quinoa </option>
                   <option value= 'honey'> Honey </option>
                   <option value= 'fennel'> Fennel </option>
                   <option value= 'oats'> Oats </option>
                   <option value= 'yeast'> yeast </option>
                   <option value= 'goatcheese'> Goat Cheese </option>
                   <option value= 'mozzarella'> Mozzarella </option>
                   <option value= 'tortillas'> Tortillas </option>
                   <option value= 'cayenne'> Cayenne </option>
                   <option value= 'aniseed'> Aniseed </option>
                   <option value= 'bacon'> Bacon </option>
                   <option value= 'turkey'> Turkey </option>
                   <option value= 'pork'> Pork </option>
                   <option value= 'lamb'> Lamb </option>
                   <option value= 'cod'> Cod </option>
                   <option value= 'salmon'> Salmon </option>
                   <option value= 'ketchup'> Ketchup </option>
                   <option value= 'oil'> Olive Oil </option>
                   <option value= 'soya'> Soya Sauce </option>
                   <option value= 'peas'> Peas </option>
                   <option value= 'butter'> Butter </option>
                   <option value= 'margarine'> Margarine </option>
                   <option value= 'cream'> Cream</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field is-secondary">
              <div className="control">
                <div className="select">

                  <select name="ingredients3" onChange={handleChange}>
                  <option value="-"> No more ingredients </option>
                  <option value="onion"> Onion </option>
                   <option value='mushroom'> Mushrooms</option>
                   <option value= 'celery'> Celery</option>
                   <option value= 'fish'> Fish </option>
                   <option value= 'tomato'> Tomatoes </option>
                   <option value= 'broccoli'> Broccoli </option>
                   <option value= 'tofu'> Tofu </option>
                   <option value= 'avocado'> Avocado </option>
                   <option value= 'olives'> Olives </option>
                   <option value= 'beets'> Beets </option>
                   <option value= 'cilantro'> Cilantro</option>
                   <option value= 'eggplant'> Eggplant</option>
                   <option value= 'pineapple'> Pineapple </option>
                   <option value= 'ginger'> Ginger </option>
                   <option value= 'mayonnaise'> Mayonnaise </option>
                   <option value= 'mustard'> Mustard </option>
                   <option value= 'corn'> Corn </option>
                   <option value= 'tuna'> Tuna </option>
                   <option value= 'pickles'> Pickles </option>
                   <option value= 'coriander'> Coriander </option>
                   <option value= 'anchovis'> Anchovis </option>
                   <option value= 'arugula'> Arugula </option>
                   <option value= 'apple'> Apples </option>
                   <option value= 'banana'> Banana </option>
                   <option value= 'beans'> Beans </option>
                   <option value= 'cauliflower'> Cauliflower </option>
                   <option value= 'chicken'> Chicken </option>
                   <option value= 'beef'> Beef </option>
                   <option value= 'milk'> Milk </option>
                   <option value= 'cheese'> Cheese </option>
                   <option value= 'lettuce'> Lettuce </option>
                   <option value= 'garlic'> Garlic </option>
                   <option value= 'paprika'> Paprika </option>
                   <option value= 'spinach'> Spinach </option>
                   <option value= 'chili'> Chili Peppers </option>
                   <option value= 'cucumber'> Cucumber </option>
                   <option value= 'potato'> Potato </option>
                   <option value= 'jalapeno'> Jalapeno </option>
                   <option value= 'zucchini'> Zucchini </option>
                   <option value= 'asparagus'> Asparagus </option>
                   <option value= 'rice'> Rice </option>
                   <option value= 'pasta'> Pasta </option>
                   <option value= 'quinoa'> Quinoa </option>
                   <option value= 'honey'> Honey </option>
                   <option value= 'fennel'> Fennel </option>
                   <option value= 'oats'> Oats </option>
                   <option value= 'yeast'> yeast </option>
                   <option value= 'goatcheese'> Goat Cheese </option>
                   <option value= 'mozzarella'> Mozzarella </option>
                   <option value= 'tortillas'> Tortillas </option>
                   <option value= 'cayenne'> Cayenne </option>
                   <option value= 'aniseed'> Aniseed </option>
                   <option value= 'bacon'> Bacon </option>
                   <option value= 'turkey'> Turkey </option>
                   <option value= 'pork'> Pork </option>
                   <option value= 'lamb'> Lamb </option>
                   <option value= 'cod'> Cod </option>
                   <option value= 'salmon'> Salmon </option>
                   <option value= 'ketchup'> Ketchup </option>
                   <option value= 'oil'> Olive Oil </option>
                   <option value= 'soya'> Soya Sauce </option>
                   <option value= 'peas'> Peas </option>
                   <option value= 'butter'> Butter </option>
                   <option value= 'margarine'> Margarine </option>
                   <option value= 'cream'> Cream</option>
                  </select>

                </div>
              </div>
            </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="button secondary-btn raised">Update Preferences</button>
              </div>
              <div className="control">
                <button
                onClick={()=> history.update("/")}
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

export default withAuthorization(Preferences)
