import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipeData }) {
const nutrients = recipeData.extendedIngredients

  return (
    <main>
      {/* <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients}</li>
          <li>Carbohydrates: {nutrients.}</li>
          <li>Fat: {nutrients.}</li>
          <li>Protein: {nutrients.}</li>
        </ul>
      </section> */}
      <section className="recipes">
        {recipeData.meals.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />
        })}
      </section>
    </main>
  )
}