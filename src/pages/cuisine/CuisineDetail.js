import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCuisineById } from 'actions'
import { Link } from 'react-router-dom'

import Spinner from 'components/Spinner'

const CuisineDetail = props => {

  const { cuisineId } = useParams()
  const { fetchCuisineById, isFetching } = props

  useEffect(() => {
    fetchCuisineById(cuisineId)
  }, [cuisineId, fetchCuisineById])


  const { cuisine } = props

  if (isFetching || cuisineId !== cuisine.id) { return <Spinner /> }

  return (
    <section className="hero is-fullheight is-default is-bold service-detail-page">
    <div className="hero-body">
    <div className="container has-text-centered">
    <div className="columns is-vcentered">
    <div className="column is-5">
    <figure className="image is-4by3">
    <img src={cuisine.image} alt="First pic of region" />
    </figure>
    <br />
    <figure className="image is-4by3">
    <img src={cuisine.altimage} alt="Second pic of region" />
    </figure>
    </div>
    <div className="column is-6 is-offset-1">
    <div className="service-header-container">
    <div className="media service-user">
    <div className="media-left">
    <figure className="image is-48x48">
    </figure>
    </div>

    </div>
    </div>
    <h1 className="title is-2">
    {cuisine.title}
    </h1>
    <br />
    <h2 className="subtitle is-6">
    {cuisine.description}
    </h2>
    <br />
    <Link
              to="/Recipe">
              <button className="countryButton">
                  Find Recipes
              </button>
            </Link>
      </div>
      </div>
      </div>
      </div>
      </section>
    )
  }

  const mapStateToProps = ({selectedCuisine, auth}) => (
    {
      cuisine: selectedCuisine.item,
      isFetching: selectedCuisine.isFetching,
      auth
    }
  )

  export default connect(mapStateToProps, {fetchCuisineById})(CuisineDetail)
