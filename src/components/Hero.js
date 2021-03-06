/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import MapIndex from './MapIndex'


const Hero = () =>
  <section className="hero is-default is-bold">
    <div className="hero-body">
      <div className="container" width="50" height="50" color="$secondary">
        <MapIndex className='map' />
      </div>
    </div>
  </section>
export default Hero
