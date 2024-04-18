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
   { id: "3", name: "Best Out of waste",image:bofw },
   { id: "4", name: "Movie Minds",image:movie },
   { id: "5", name: "TRADEMARK",image:trade },
   { id: "6", name: "STORY ARCS",image:story },
   { id: "7", name: "CLONE QUEST",image:clone },
   { id: "8", name: "Cut Short",image:cut }];
   const navigate=useNavigate();
  return (
    <div className='eve-sec'>
      <h1 className='scroll-rev  minor '><span >Events</span></h1>
      <p className='scroll-rev' ><span >
        
      Dive into a diverse array of events, both technical and non-technical, as we explore the frontiers of technology and the depths of 
      artistic expression. Join us in unlocking new horizons and redefining the boundaries of possibility.
       </span></p>
      <div className='eve-card-main-container'>
       {Eventnames.map((item)=>{
        return <EventCard  key={item.id} data={item} />
       })}
      
      </div>

    </div>
  )
}

export default Events