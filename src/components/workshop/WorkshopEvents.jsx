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
        <h4>Event Head:<span>{ShowWorkshop[0].Head}</span></h4>
        <h4>Mobile number:<span>{ShowWorkshop[0].Contact}</span></h4>
       </div>

       <div className='register-container' >
           <div className='note-con'  >
             <h4>Note</h4>
             <p>Before registering for an individual event, make sure you are registered for the overall symposium</p>
           </div>
           <div className='eve-btn-con'>

          <a href='https://forms.gle/KMe9rseqcMUWKfYh7'> <button className='bt1' >Register to Symphosium</button></a>
           <a href='https://forms.gle/EPF4PFdYRFevsCnm8'><button className='bt2' >Register to {ShowWorkshop[0].name}</button></a>
           
            

            
           </div>


       </div>
        
        
        </div>
  )
}

export default WorkshopEvents