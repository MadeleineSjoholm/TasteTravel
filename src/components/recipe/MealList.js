import React from 'react'
import Meal from './Meal'

export default function MealList({ mealData }) {
const recipes = mealData.recipes

  return (
    <main>
      <section className="nutrients">
        <h1>Most Popular</h1>
        <ul>
          {/* <li><b>Most popular: {Recipes.veryPopular}</b></li>
          <li>Sustainable: {Recipes.sustainable}</li>
          <li>Health Score: {Recipes.healthScore}</li> */}
          <li><b>Most popular: {mealData.recipes.total}</b></li>
          {/* <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li> */}
        </ul>
      </section>
      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />
        })}
      </section>
    </main>
  )
}
