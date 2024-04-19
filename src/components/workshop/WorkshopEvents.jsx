import React, { useRef } from 'react'
import {useParams} from 'react-router-dom'
import { WorkshopDetails } from '../../Datas/EventsDetails';
import { useEffect } from 'react';

const WorkshopEvents = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const data=useParams();
    const Wid=data.abc;
    console.log(Wid);
    const ShowWorkshop= WorkshopDetails.filter((item)=>{
      return item.id==Wid;
    })

    console.log(ShowWorkshop);

  return (
    <div className='event-page-con'>
       <div className='eve-name-con'  >
       <h3> Workshop Name :<span  >{ShowWorkshop[0]?.name}</span></h3>
       <h3> Registration:<span>{ShowWorkshop[0]?.registration}</span></h3>
       </div> 

      <div className='eve-des-con'>

       <h3 >Event Description</h3>
      
       
    <p>{ShowWorkshop[0]?.D1}</p>
       
    {ShowWorkshop[0].D2?<p>{ShowWorkshop[0].D2}</p>:<></>  }
       
      
      
     </div>

       <div className='eve-rules-con' >
        <h3>Rules</h3>
       <p>{ShowWorkshop[0].R1}</p>
       <p>{ShowWorkshop[0].R2}</p>
       <p>{ShowWorkshop[0].R3}</p>
      
        </div>
        <div className='contact-container'  >
       <h4>Event Co-ordinators:</h4>
       <div className='contact-container-text'>
          <span>Venue - {ShowWorkshop[0].Venue}</span>
          <span>Timing - {ShowWorkshop[0].Timing}</span>
          </div>
       </div>

       <div className='contact-container'  >
       <h4>Event Co-ordinators:</h4>
       <div className='contact-container-text'>
          <span>{ShowWorkshop[0].Head1} - {ShowWorkshop[0].Contact1}</span>
          <span>{ShowWorkshop[0].Head2} - {ShowWorkshop[0].Contact2}</span>
          </div>
       </div>

       <div className='register-container' >
           <div className='note-con'  >
           <h4>Note:</h4>
           <ul>
              <li> <p>Before registering for an individual event, make sure you are registered for the overall symposium</p></li>
              <li><p>Labs with the required facilities will be provided.
              Participants can feel free to bring their own laptops with chargers if they wish to do so.
              </p></li>
             </ul>
           </div>
           <div className='eve-btn-con'>

          <a href='https://forms.gle/KMe9rseqcMUWKfYh7' target='_blank'> <button className='bt1' >Register to Symposium</button></a>
           <a href={ShowWorkshop[0].Link} target='_blank'><button className='bt2' >Register to {ShowWorkshop[0].name}</button></a>
           
            

            
           </div>


       </div>
        
        
        </div>
  )
}

export default WorkshopEvents