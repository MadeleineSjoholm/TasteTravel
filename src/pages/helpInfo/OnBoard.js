/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import Spinner from 'components/Spinner'

const OnBoard = (props) => {
  const { isFetching } = props
  if (isFetching) { return <Spinner /> }

  return (
    <div className="container">
      <figure className="map_background2">
        <img src="map.png" alt="Company Logo" />
      </figure>

      <div className="content-wrapper">
        <h1 className="title">How does it work?</h1>
        <div className="text-area">

          <div className="circle1">Step 1</div>
          <p className="step1"> <b>Start off by specifying you preferences.</b> On the <a className="hreflink" href="/preferences"><b>Preferences Page</b></a> you will be able to add your diet, allergies and food items you just particularly don't like. </p>

          <div className="circle2">Step 2</div>
          <p className="step2"> <b>Choose where you want to travel.</b> Click on a country on the <a className="hreflink" href="/"><b>map</b> </a> that interests you and travel to that region.</p>

          <div className="circle3">Step 3</div>
          <p className="step3"> <b>Get your matching recipes and start cooking!</b><br />The recipe provided matches you personal preferences. From here you can just enjoy your experience but also add your recipes to your favourites as well as rate it to let your fellow travelers know what you think about it. </p>
        </div>
      </div>
    </div>
  )
}

export default OnBoard
