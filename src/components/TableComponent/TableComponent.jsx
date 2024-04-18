import React, { useState } from 'react';
import './TableComponent.css'; 
import {useNavigate} from 'react-router-dom'

const TableComponent = () => {
  const navigate=useNavigate();
  return (
    <div class="ag-format-container"
   
    >
      <div class="ag-courses_box">
        
        <div class="ag-courses_item"
        
        onClick={()=>{
          navigate('/workshop/2')
        }}
        >
          <div class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title">
              UI/UX Workshop
            </div>
            <div class="ag-courses-item_date-box">
              TIming:
              <span class="ag-courses-item_date">  9 am - 2:30 pm</span>
            </div>
          </div>
        </div>

        <div class="ag-courses_item"
       
        
        >
          <div class="ag-courses-item_link"
           onClick={()=>{
            navigate('/workshop/1')
          }}
          >
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title">
             Video editing workshop
            </div>
            <div class="ag-courses-item_date-box">
              TIming:
              <span class="ag-courses-item_date">  9 am - 11:30 am</span>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default TableComponent;
