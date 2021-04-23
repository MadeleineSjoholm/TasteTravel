/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import MapIndex from './MapIndex'

const Hero = () =>
  <section className="hero is-default is-bold">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">
                Travel with your taste buds.
            </h1>
            <MapIndex />
            <a className="button cta rounded primary-btn raised">
                  Get Started
              </a>
           
          </div>
        </div>
      </div>
    </div>
  </section>

export default Hero
