import React from 'react'
import Recipe from './TopRecipe'

export default function TopRecipeList({ recipeData }) {
  const totalResults = recipeData.totalResults

  return (
    <main>
      <section className="nutrients">
        <h1><b>Your Recomendations</b></h1>
        <ul>
          <li><b>Results: {totalResults}</b></li>
          <li>Shows at most 5</li>
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
