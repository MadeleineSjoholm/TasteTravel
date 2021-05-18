/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
//import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
//import ServiceItem from 'components/service/ServiceItem'

//import { fetchServices } from 'actions'

class Home extends React.Component {

  state = {
    services: [],
    trivia: null
  }

  //FETCHAR POPULAT DESTINATIONS
  //  componentDidMount() {
  //    this.props.fetchServices()
  //  }

  // renderServices = (services) =>
  //   services.map(service => <ServiceItem key={service.id} service={service} />)


  render() {
   // const { services } = this.props
   function getTrivia() {
    fetch(
      `https://api.spoonacular.com/recipes/random?limitLicense=<boolean>&tags=<string>&number=<number>&apiKey=fd6e9efd3d8b45ff90bee15ea56c6d77`
    )
      .then((response) => response.json())
      .then((data) => {
        this.trivia(data)
      })
      .catch(() => {
        console.log("error");
      })
  }

 
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
              <button
            className="countryButton"
            onClick={getTrivia}>Find Recipes</button>
          { this.trivia }
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
