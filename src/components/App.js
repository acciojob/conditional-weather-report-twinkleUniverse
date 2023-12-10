
import React from "react";
import './../styles/App.css';

const App = () => {
  const data= { temperature: 25, conditions: "Sunny" };
  const treshold= 20 ;

  return (
    <div>
       {
        data.temperature<treshold?
        <div>
          <p style={{color:'blue'}}>Temperature:<span>{data.temperature}</span></p>
          <p style={{color:'blue'}}>conditions:<span>{data.conditions}</span></p>
        </div> : <div>
          <p style={{color:'red'}}>Temperature:<span>{data.temperature}</span></p>
          <p style={{color:'red'}}>conditions:<span>{data.conditions}</span></p>
        </div>
       }
    </div>
  )
}

export default App
