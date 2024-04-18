import React from 'react'
import Marquee from 'react-fast-marquee';
import { FaInstagram } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='ft-sec'  >
        
            <div className='mark-con'>
          <p >DEZINE 24</p> 
          
          <a  href='https://www.instagram.com/csd.rec/?hl=en'>
          <FaInstagram className='icon' style={{cursor:"pointer"}} /></a>
           
         
          
          </div>
          
       
         


    </div>
  )
}

export default Footer