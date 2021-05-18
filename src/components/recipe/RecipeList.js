import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipeData }) {
const totalResults = recipeData.totalResults

  return (
    <main>
      <section className="nutrients">
        <h1>Your Recomendations</h1>
        <ul>
          <li>Results: {totalResults}</li>
          {/* <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li> */}
        </ul>
      </section>
      <section className="recipes">
        {recipeData.results.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />
        })}
      </section>
    </main>
  )
}