import React from 'react'
import Recipe from './MostPop'

export default function MostPopList({ mealData }) {
const totalResults = mealData.totalResults

  return (
    <main>
      <section className="nutrients">
        <h1>Most Popular</h1>
        <ul>
          <li>Results: {totalResults}</li>
          {/* <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li> */}
        </ul>
      </section>
      <section className="recipes">
        {mealData.meals.map((meal) => {
          return <Recipe key={meal.id} recipe={meal} />
        })}
      </section>
    </main>
  )
}