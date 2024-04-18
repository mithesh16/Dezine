import React from 'react'
import './TextWrapper.css'
import Marquee from "react-fast-marquee";

const TextWrapper = () => {
  return (
    <div className='con'>
    <Marquee autoFill direction="left" speed={50} >
   <h1 className='te'>          Department of Computer Science and Design </h1>
  </Marquee>
  </div>
  )
}

export default TextWrapper