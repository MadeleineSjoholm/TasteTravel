import withAuthorization from 'components/hoc/withAuthorization'
import React from 'react'

const SavedRecipes = ({auth}) => {

  return (
    <div className="container">
      <div className="content-wrapper">
        <h1 className="title">Saved Recipes</h1>
        <p>
          Here is the Saved Recipes Page
        </p>
      </div>
    </div>
  )
}

export default withAuthorization(SavedRecipes)
