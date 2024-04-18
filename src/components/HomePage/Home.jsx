import React from 'react'
import './Home.css'
import TextWrapper from '../TextWrapper/TextWrapper'
import design from '../../assets/designn.png'







const Home = () => {
  return (
   <>
    
    
  <div className='home-sec'>
    
    <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<div id='title'>
  <div className='main-con'>
    
  <span className='title-font'>
    
  <img src={design}  style={{zIndex:"3"}} />
  </span>
 
  <p className='para'>
    April 29
  </p>
  <p className='dpt'>Department of Computer Science and Design </p>
  </div>
</div>


  </div>
  </>
  )
}

export default Home