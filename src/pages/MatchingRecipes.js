

import React from 'react'
import MapChart from "../MAP/MapChart";
import withAuthorization from 'components/hoc/withAuthorization'

const MatchingRecipes = () => {
  console.log(MapChart.NAME)
  return (
    <div className="container">
      <div className="content-wrapper">
        <h1 className="title">Matching Recipes</h1>
        <p>
          This is your matching Recipes
        </p>
        <p>
          Här tänker jag att oberoende av vilket land man klickar på så kommer man till den här sidan.
          Och sen beroende på vilket land och vilka prefereser man har så gör vi if-satser och allt sånt där
          och så visas bara de recept som ska visas?
        </p>
      </div>
    </div>
  )
}

export default withAuthorization(MatchingRecipes)
