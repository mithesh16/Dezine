import React from 'react'
import './Sponsers.css'
import Marquee from 'react-fast-marquee'
import roxon from '../../assets/sponsers/roxon.jpeg'
import square from '../../assets/sponsers/square2.jpg'
import square1 from '../../assets/sponsers/square.jpg'
import wedigi from '../../assets/sponsers/wedigi.jpg'

const Sponsers = () => {
  return (
    <div className='spon-sec'>
        <h1 className='minor'>Sponsors</h1>

        
            <div className='mark-img-con'>
            <a href="https://squarebullfintechpvtltd.com">
            <img src={square1}  />
            </a>
            <a href="https://www.instagram.com/roxon_in?igsh=MWU2MWk4ZDZ6dW9ycA==">
            <img  src={roxon} />
            </a>
            <a href="https:www.wedigistudio.com">
            <img src={wedigi} />
            </a>
           
            
            
            
            
            </div>
       
       
       
    </div>
  )
}

export default Sponsers