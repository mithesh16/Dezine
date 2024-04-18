import React from 'react'
import Home from './HomePage/Home'
import AboutPage from './AboutPage/AboutPage'
import Events from './Events/Events'
import Workshop from './workshop/Workshop'
import Sponsers from './Sponsers/Sponsers'
import Footer from './Footer/Footer'

const LandingPage = () => {
  return (
    <div>
         <Home/>
      <AboutPage/>
      <Events/>
      <Workshop/>
      <Sponsers/>
      <Footer/>
    </div>
  )
}

export default LandingPage