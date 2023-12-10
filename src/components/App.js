
import React from "react";
import './../styles/App.css';

const App = () => {
  const data= { temperature: 25, conditions: "Sunny" };
  const treshold= 20 ;

  return (
    <div>
       {
        data.temperature<treshold?
        <div style={{color:'blue'}}>
          <p>Temperature: {data.temperature}</p>
          <p>conditions: {data.conditions}</p>
        </div> : <div style={{color:'red'}}>
          <p>Temperature:{data.temperature}</p>
          <p>Conditions:{data.conditions}</p>
        </div>
       }
    </div>
  )
}

export default App
