import React from 'react'
import about from 'docs/about'
import Spinner from 'components/Spinner'

const About = (props) => {
  const labels = about.Labels
  const { isFetching } = props

  if (isFetching) { return <Spinner /> }

  return (
    <div className="container">
      <br />
      <h1 className="title">ABOUT TASTETRAVEL</h1>
      <figure className="map_background2">
        <img src="map.png" alt="Company Logo" />
      </figure>
      <h3 className="aboutQuestion"> What is TasteTravel? </h3>
      <div className="aboutDetail">
        {labels.what}
      </div>
      <h3 className="aboutQuestion"> Why do we believe in TasteTravel?  </h3>
      <div className="aboutDetail">
        {labels.why_one}
        <br /><br />
        {labels.why_two}
      </div>
    </div>
  )
}

export default (About)
