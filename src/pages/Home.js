/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from 'react';
import Select from 'react-select';
import { tagsOpt } from 'docs/data'
//import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
import MealList from 'components/recipe/MealList'
//import ServiceItem from 'components/service/ServiceItem'

//import { fetchServices } from 'actions'

class Home extends React.Component {
  state = {
    selectedOption: null
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
        mealData: null,
        tags: []
    }
}

 handleChange = selectedOption => {
  this.setState(
    { selectedOption },
    () => console.log(`Option selected:`, this.state.selectedOption)
  );
};

// changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
// }



  //FETCHAR POPULAT DESTINATIONS
  //  componentDidMount() {
  //    this.props.fetchServices()
  //  }

  // renderServices = (services) =>
  //   services.map(service => <ServiceItem key={service.id} service={service} />)


  render() {
    const { tags } = this.state;
   // const { services } = this.props
   console.log(tags)
   
   function getMealData() {
    fetch(
      // `https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${tags}&number=4&apiKey=9c651708cc604ceaa7d0cad063018dd4`
    )
      .then((response) => response.json())
      .then((data) => {
        this.mealData(data)
      })
      .catch(() => {
        console.log("error");
      })
  }
  // function handleChange(e) {
  //   this.tags(e.target.value);
  // }
   
  

 
    return (
      <div>
        <Hero />
        <section className="section section-feature-grey is-small">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Popular Destinations </h2>
              <h3 className="subtitle is-5 is-2">View the top rated recipes</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">
              <div className="field">
              <label className="label" >Quick Search (e.g. "Italian" or "Salmon")</label>
              <div className="control">
              
           <Select
             value={tags}
             onChange={this.handleChange}
             options={tagsOpt}
             isMulti
             name="tags"
             className="basic-multi-select"
             classNamePrefix="select"
           />
        </div>
        </div>
              <button
            className="countryButton"
            onClick={getMealData}>Find Recipes</button>
          {this.mealData && <MealList MealData={this.mealData} />}
               {/* DISPLAYAR SERVICES
                { this.renderServices(services) } */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

//const mapStateToProps = state => ({services: state.services.all})

//export default connect(mapStateToProps, {fetchServices})(Home)

export default Home
