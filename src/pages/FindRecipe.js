
import React from 'react'
import { Link } from 'react-router-dom'

const FindRecipe = () => {

  return (
    <div className="container">
      <div className="content-wrapper">
        <h1 className="title">Find Recipe</h1>
        <p>
          Here is the Find Recipe page
        </p>
        <Link
          to="/Recipe">
          <button className="faqButton">
              Recipe
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FindRecipe
