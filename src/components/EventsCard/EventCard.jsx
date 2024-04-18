import React from 'react'
import './EventCard.css'

import {useNavigate} from 'react-router-dom'

const EventCard = (props) => {
  
  const navigate=useNavigate();
  return (
   <div className='Event-card-container'>
     <div className='box' >
         <img src={props.data.image} />
         <button  onClick={()=>{
                navigate('/'+props.data.id)
         }} >Explore {props.data.name}  </button>
      </div>
      </div>
  )
}

export default EventCard