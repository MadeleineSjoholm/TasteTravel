// // import withAuthorization from 'components/hoc/withAuthorization'



// // import React from 'react'

// // const Secret = (props) => {
// //   return (
// //     <h1>I am SECRET Page, ONLY Auth USER can see me!</h1>
// //   )
// // }

// // export default withAuthorization(Secret)

/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState } from 'react';
import Select from 'react-select';
import { ingredientOpt, intoleranceOpt } from 'docs/data'


class App extends React.Component {

  state = {
    selectedOption: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    // diet: [],
    intolerance: []
    // ingredient: ''
    };
  }



  handleChange = selectedOption => {
    this.setState(
      { selectedOption, intolerance },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { intolerance, ingredient } = this.state;

    return (
      <div>
      <div className="field">
        <label className="label">Intolerance</label>
        <div className="control">
          <Select
            value={intolerance}
            onChange={this.handleChange}
            options={intoleranceOpt}
            isMulti
            name="intolerance"
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>

<div className="field">
<label className="label">Ingredients</label>
<div className="control">
  <Select
    value={ingredient}
    onChange={this.handleChange}
    options={ingredientOpt}
    isMulti
    name="intolerance"
    className="basic-multi-select"
    classNamePrefix="select"
  />
</div>
</div>
</div>
    );
  }
}
export default App;