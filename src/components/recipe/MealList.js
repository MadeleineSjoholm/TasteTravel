import React from 'react'
import Recipe from './Meal'

export default function MostPopList({ mealData }) {
// const Recipes = mealData.recipes

  return (
    <main>
      <section className="nutrients">
        <h1>Most Popular</h1>
        <ul>
          {/* <li><b>Most popular: {Recipes.veryPopular}</b></li>
          <li>Sustainable: {Recipes.sustainable}</li>
          <li>Health Score: {Recipes.healthScore}</li> */}
          {/* <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li> */}
        </ul>
      </section>
      <section className="recipes">
        {mealData.recipes.map((meal) => {
          return <Recipe key={meal.id} recipe={meal} />
        })}
      </section>
    </main>
  )
}

//  {/* <input
//                  name="tags"
//                  onChange={this.changeHandler}
//                  className="input is-large"
//                  type="text"
//                  placeholder="Searchwords"/> */}