import React, { useState } from 'react';
import './App.css';
//import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

function implhook(props){
    const[order,setorder]=useState(true);
  return(
    <div>
      
      
          <p>you clicked  order</p>
          
      
      
    </div>
  )
  }
  ReactDOM.render(
    <React.StrictMode>
      <implhook />
    </React.StrictMode>,
    document.getElementById('root')
  );