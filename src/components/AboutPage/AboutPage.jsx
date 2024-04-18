import React from 'react'
import {motion } from 'framer-motion'
import './AboutPage.css'
import abtimg from '../../assets/aboutimage/abtimg.jpeg'


const AboutPage = () => {
  return (

    
    <div className='abt-sec'>

      
          <div className='abt-con-container'>
                 <div className='abt-con-text'>
                    <h4 className=''>About us</h4>
                    <p>
                    DEZINE is a fantastic venue where students may showcase their tech-integrated design abilities.The class of '21 takes great
                     pride in hosting the inaugural "DEZINE" symposium to all the students. It provides an outlet for your latent abilities in 
                     the areas of design and computer science-related technical pursuits. DEZINE aims to foster networking, collaboration, 
                     and the exchange of ideas in evidence-based practice and education.With a strong focus on evidence-based practice. 

                     
                    </p>
                    </div>

                   <div className='abt-text-img-con' >
                      <img src={abtimg} />
                      <button className='abt-btn'>View More</button>
                   </div>
          </div>
          
         
          

    </div>
  )
}

export default AboutPage