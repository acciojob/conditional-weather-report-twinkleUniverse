
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
          <h1>Temperature: {data.temperature}</h1>
          <h1>conditions: {data.conditions}</h1>
        </div> : <div style={{color:'red'}}>
          <h1>Temperature:{data.temperature}</h1>
          <h1>Conditions:{data.conditions}</h1>
        </div>
       }
    </div>
  )
}

export default App
