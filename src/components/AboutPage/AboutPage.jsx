import React from 'react'
import {motion } from 'framer-motion'
import './AboutPage.css'
//import abtimg from '../../assets/aboutimage/abtimg.jpeg'
import abt from '../../assets/aboutimage/abt.jpeg'
const AboutPage = () => {
  return (

    
    <div className='abt-sec'>

      
          <div className='abt-con-container'>
                 <div className='abt-con-text'>
                    <h4>About us</h4>
                    <p>
            The Class of 2025 of the Department of Computer Science and Design, Rajalakshmi Engineering College is thrilled to announce our inaugural inter-collegiate symposium Dezìne,  scheduled to take place on April 29 2024.<br/><br/>
            This symposium will act as an excellent platform for all students who yearn for a chance to prove their talent in design, media and tech! So, if you are a visually inclined person who has faith in your creativity, this is just the right place! Get set to Dezìne!
                    </p>
                    </div>

                   <div className='abt-text-img-con' >
                      <img src={abt} />
                      <button className='abt-btn'>View More</button>
                   </div>
          </div>
          
         
          

    </div>
  )
}

export default AboutPage