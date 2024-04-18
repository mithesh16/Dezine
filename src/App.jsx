import React from 'react'

import {Route,Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import EventPage from './components/EventPage/EventPage'
import WorkshopEvents from './components/workshop/WorkshopEvents'



const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={<EventPage/>} path='/:abc' />
        <Route element={<WorkshopEvents/>} path='/workshop/:abc' />

      
      </Routes>
    </div>
  )
}

export default App