
import React from "react";
import './../styles/App.css';

const App = () => {
  const data= { temperature: 25, conditions: "Sunny" };
  const treshold= 20 ;

  return (
    <div>
       {
        data.temperature<treshold?
    
          <p style={{color:'blue'}}>
            <span>Temperature:{data.temperature}</span>
            <span>Conditions:{data.conditions}</span>
          </p>
        : 
          <p style={{color:'red'}}>
            <span>Temperature:{data.temperature}</span> 
            <br/>
            <span>Conditions:{data.conditions}</span>
          </p>  
       }
    </div>
  )
}

export default App
