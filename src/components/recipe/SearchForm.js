import React from 'react';

const SearchForm = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom:"3rem" }}>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button">Search</button>
  </form>
);

export default SearchForm;