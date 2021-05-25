import React from 'react'
import Meal from './Meal'

export default function MealList({ mealData }) {
// const recipes = mealData.results

  return (
    <main>
      <section className="results">
        <h1>Your Results:</h1>
        <ul>
          <li><b>Results: {mealData}</b></li>
          {/* <li>Total Results: {mealData.totalResults}</li> */}
         
        </ul>
      </section>
      <section className="meals">
        {mealData.results.map((meal) => {
          return <Meal key={meal.id} meal={meal} />
        })}
      </section>
    </main>
  )
}


