import React from 'react'
import Marquee from 'react-fast-marquee';
import dezine from "../../assets/DEZINElogo.png"
import { FaInstagram} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import './Footer.css'

const Footer = () => {
  return (
    <div className='ft-sec'  >
        
            <div className='mark-con'>
          <img src={dezine} className='footer-logo'/>
          
          <div className='logos'>
          <a  href='mailto:dezinecsd@rajalakshmi.edu.in' target='_blank'>
          <CiMail className='icon' style={{cursor:"pointer",fontSize:"33px",fontWeight:"bold"}} /></a>
          <a  href='https://www.instagram.com/dezine.rec?igsh=cWs5Y3E4cjF6dm0z' target='_blank'>
          <FaInstagram className='icon' style={{cursor:"pointer"}} /></a>
          </div>
         
           
         
          
          </div>
          
       
         


    </div>
  )
}

export default Footer