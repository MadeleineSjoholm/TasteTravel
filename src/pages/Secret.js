// import withAuthorization from 'components/hoc/withAuthorization'



// import React from 'react'

// const Secret = (props) => {
//   return (
//     <h1>I am SECRET Page, ONLY Auth USER can see me!</h1>
//   )
// }

// export default withAuthorization(Secret)

/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
import ServiceItem from 'components/service/ServiceItem'
import diet from 'docs/diet'
 

import { fetchServices } from 'actions'

const labels = diet.Labels
class Home extends React.Component {




  render() {
    const { services } = this.props
    return (
      <div>
        {/* <Hero /> */}
        <section className="section section-feature-grey is-medium">
          <div className="container section-padding">
            <div className="diet-wrapper has-text-centered">
            <h3 className="title is-2">More about diets </h3>
              <h3 className="title is-muted is-3 ">Vegetarian </h3>
              <h4 className="subtitle is-5 is-2 ">{ labels.vegetarian }</h4>
              <h3 className="title is-3">Vegan</h3>
              <h4 className="subtitle is-5 is-2">{ labels.vegan }</h4>
              <h3 className="title is-3">Gluten Free </h3>
              <h4 className="subtitle is-5 is-2">{ labels.gluten }</h4>
              <h3 className="title is-3">Lacto-Vegetarian</h3>
              <h4 className="subtitle is-5 is-2">{ labels.lacto }</h4>
              <h3 className="title is-3">Ovo-vegetarian </h3>
              <h4 className="subtitle is-5 is-2">{ labels.ovo }</h4>
              <h3 className="title is-3">Pescetarian</h3>
              <h4 className="subtitle is-5 is-2">{ labels.pesc }</h4>
              <h3 className="title is-3">Ketogenic </h3>
              <h4 className="subtitle is-5 is-2">{ labels.keto }</h4>
              <h3 className="title is-3">Paleo</h3>
              <h4 className="subtitle is-5 is-2">{ labels.paleo }</h4>
              <h3 className="title is-3">Primal </h3>
              <h4 className="subtitle is-5 is-2">{ labels.primal }</h4>
              <h3 className="title is-3">Vegan</h3>
              <h4 className="subtitle is-5 is-2">{ labels.whole }</h4>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

const mapStateToProps = state => ({services: state.services.all})

export default connect(mapStateToProps, {fetchServices})(Home)
