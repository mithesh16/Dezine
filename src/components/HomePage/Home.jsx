import React from 'react'
import './Home.css'
import TextWrapper from '../TextWrapper/TextWrapper'
import design from '../../assets/designn.png'
import GradientButton from '../GradientButton/Gradientbutton'






const Home = () => {
  return (
   <>
    
    
  <div className='home-sec'>
    
    <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<div id='title'>

  <div className='main-con'>
    {/* <p className='para-dpt'>Department of Computer Science and Design </p>
    <p className='para'>Presents</p> */}

  <span className='title-font'>
  <img src={design}  style={{zIndex:"3"}} />
  </span>
  <p className='para'>
    April 29
  </p>
  <p className='para-venue'>
Rajalakshmi Engineering College
  </p>
  <a href='https://docs.google.com/forms/d/e/1FAIpQLSdJxmTLjhmnh4VRFBRaxyxL8nUjdHGhBnm2n8zO6gAmG4p1JQ/closedform' target='_blank' >
  <button className='reg-btn'>Register Now</button>
    </a>
  </div>
</div>


  </div>
  </>
  )
}

export default Home