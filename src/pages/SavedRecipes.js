import withAuthorization from 'components/hoc/withAuthorization'
import React from 'react'

const SavedRecipes = ({auth}) => {

  return (
    <div className="container">
      <div className="content-wrapper">
        <h1 className="title">Saved Recipes</h1>
        <figure className="map_background2">
          <img src="map.png" alt="Company Logo" />
        </figure>
      </div>
    </div>
  )
}

export default withAuthorization(SavedRecipes)
