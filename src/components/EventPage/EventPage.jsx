import React from 'react'
import './EventPage.css'
import {useParams} from 'react-router-dom'
import { EventData } from '../../Datas/EventsDetails'
import { useEffect } from 'react'


const EventPage = () => {
    const Params=useParams();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
   const Eventid=Params.abc;
   console.log(Eventid);
   const ShowEvent=EventData.filter((item)=>{
   return item.id ===Eventid;
   })

   console.log(ShowEvent);
  return (
    <div className='event-page-con'>
       <div className='eve-name-con'  >
       <h3  > Event Name :<span id='eve-name' style={{color:"white",fontStyle:"bold"}} >{ShowEvent[0]?.EventName}</span></h3>
       <h3> Participants:<span>{ShowEvent[0].Participants}</span></h3>
       </div> 

      <div className='eve-des-con'>

       <h3 >Event Description</h3>
       <p>{ShowEvent[0].EventDescription_p1}</p>
       
        {ShowEvent[0].EventDescription_p2?<p>{ShowEvent[0]?.EventDescription_p2}</p>:<></>}
       
        {ShowEvent[0].EventDescription_p3?<p>{ShowEvent[0]?.EventDescription_p3}</p>:<></>  }
       
       {ShowEvent[0].EventDescription_p4?<p>{ShowEvent[0]?.EventDescription_p4}</p>:<></>}
       
       {ShowEvent[0].EventDescription_p5?<p>{ShowEvent[0]?.EventDescription_p5}</p>:<></>}
      
     </div>

     <div className='eve-round-con' >
        
     {ShowEvent[0].PreliminaryRoundTItle?<h3 >{ShowEvent[0].PreliminaryRoundTItle}</h3>:<></>}
     
     

     {ShowEvent[0].PreliminaryRound?<p>{ShowEvent[0].PreliminaryRound}</p>:<></>}
    
     

     {ShowEvent[0].Round1Title?<h3>{ShowEvent[0].Round1Title}</h3>:<></>}
     
     
   {ShowEvent[0].Round1?<p>{ShowEvent[0].Round1}</p>:<></>}
     
     
     {ShowEvent[0].Round2Title?<h3>{ShowEvent[0].Round2Title}</h3>:<></>}
     
    
    {ShowEvent[0].Round2?<p>{ShowEvent[0].Round2}</p>:<></>}
     
     

     </div>
     <div className='extra-con'>
       {ShowEvent[0].Extraline1?<p>{ShowEvent[0].Extraline1}</p>:<></>}
        {ShowEvent[0].Extraline2?<p>{ShowEvent[0].Extraline2}</p>:<></>}
      {ShowEvent[0].Extraline3?<p>{ShowEvent[0].Extraline3}</p>:<></>}
     </div>

       <div className='eve-rules-con' >
        <h3>Rules</h3>
      {ShowEvent[0].Rule1?<p>{ShowEvent[0].Rule1}</p>:<></>}
      {ShowEvent[0].Rule2?<p>{ShowEvent[0].Rule2}</p>:<></>}
      {ShowEvent[0].Rule3?<p>{ShowEvent[0].Rule3}</p>:<></>}
      {ShowEvent[0].Rule4?<p>{ShowEvent[0].Rule4}</p>:<></>}
      {ShowEvent[0].Rule5?<p>{ShowEvent[0].Rule5}</p>:<></>}
      {ShowEvent[0].Rule6?<p>{ShowEvent[0].Rule6}</p>:<></>}
        </div>

       <div className='contact-container'  >
        <h4>Event Co-ordinators:</h4>
        <div className='contact-container-text'>
        <span>{ShowEvent[0].EventHead1} - {ShowEvent[0].Contact1}</span>
          <span>{ShowEvent[0].EventHead2} - {ShowEvent[0].Contact2}</span>
        </div>
          
       </div>

       <div className='register-container' >
           <div className='note-con'  >
             <h4>Note</h4>
             <p>Before registering for an individual event, make sure you are registered for the overall symposium</p>
           </div>
           <div className='eve-btn-con'>

          <a href='https://forms.gle/KMe9rseqcMUWKfYh7'>
            <button className='bt1' >Register to Symposium</button>
            </a> 
         <a href={ShowEvent[0].link} > 
         <button className='bt2' >Register to {ShowEvent[0].EventName}
         </button>
         </a> 
           
            

            
           </div>


       </div>
        
        
        </div>
  )
}

export default EventPage