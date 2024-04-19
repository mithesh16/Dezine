import React from 'react'
import './Events.css'
import EventCard from '../EventsCard/EventCard'
import {useNavigate} from 'react-router-dom'
import code from '../../assets/EventPosters/code.jpg'
import bofw from '../../assets/EventPosters/bofw.jpg'
import beyound from '../../assets/EventPosters/beyound.jpg'
import movie from '../../assets/EventPosters/movie.jpg'
import trade from '../../assets/EventPosters/trademark.jpg'
import story  from '../../assets/EventPosters/story.jpg'
import  clone from '../../assets/EventPosters/clone.jpg'
import cut from '../../assets/EventPosters/cutshot.jpg'

const Events = () => {
   const Eventnames=[{ id: "1", name: "Code Crunch",image:code  },
   { id: "2", name: "Beyond Buttons(UI/UX)",image:beyound },
   { id: "3", name: "Trademark",image:trade },
   { id: "4", name: "Clone Quest",image:clone },
   { id: "5", name: "Cut Shot",image:cut },
   { id: "6", name: "Movie Minds",image:movie },
   { id: "7", name: "Best Out of Waste",image:bofw },
   { id: "8", name: "Story Arcs",image:story },]
  
   const navigate=useNavigate();
  return (
    <div className='eve-sec'>
      <h1 className='scroll-rev  minor '><span >Events</span></h1>
      {/* <p className='scroll-rev' ><span >
        
      Dive into a diverse array of events, both technical and non-technical, as we explore the frontiers of technology and the depths of 
      artistic expression. Join us in unlocking new horizons and redefining the boundaries of possibility.
       </span></p> */}
      <div className='eve-card-main-container'>
       {Eventnames.map((item)=>{
        return <EventCard  key={item.id} data={item} />
       })}
      
      </div>

    </div>
  )
}

export default Events