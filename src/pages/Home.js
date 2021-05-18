/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
//import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
import MealList from 'components/recipe/MealList'
//import ServiceItem from 'components/service/ServiceItem'

//import { fetchServices } from 'actions'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        mealData: null,
        tags: ''
    }
}

changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}


  // state = {
  //   mealData: null,
  //   tags: ''
  // }

  //FETCHAR POPULAT DESTINATIONS
  //  componentDidMount() {
  //    this.props.fetchServices()
  //  }

  // renderServices = (services) =>
  //   services.map(service => <ServiceItem key={service.id} service={service} />)


  render() {
   // const { services } = this.props
   const { tags } = this.state
   function getMealData() {
    fetch(
      `https://api.spoonacular.com/recipes/random?limitLicense=false&tags=${tags}&number=4&apiKey=df8f6279130e4a768bd08e6a5d7ad77b`
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
              <div className="control">
          <input
                 name="tags"
                 onChange={this.changeHandler}
                 className="input is-large"
                 type="text"
                 placeholder="Searchwords"/>
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
