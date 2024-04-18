import React from 'react'
import './Sponsers.css'
import Marquee from 'react-fast-marquee'
import roxon from '../../assets/sponsers/roxon.jpg'
import square from '../../assets/sponsers/square.jpg'
import wedigi from '../../assets/sponsers/wedigi.jpg'

const Sponsers = () => {
  return (
    <div className='spon-sec'>
        <h1 className='minor'>Sponsors</h1>

        
            <div className='mark-img-con'>
            <img  src={roxon} />
            <img src={wedigi} />
            <img src={square} />
            
            </div>
       
       
       
    </div>
  )
}

export default Sponsers