
import React from "react";
import './../styles/App.css';

const App = () => {
  const data= { temperature: 25, conditions: "Sunny" };
  const treshold= 20 ;
  const tempColor=data.temperature>treshold?'red':'blue';

  return (
    <div>
         <p style={{color:tempColor}}>
            Temperature: {data.temperature}
         </p>
         <p>
           Conditions: {data.conditions}
         </p>
    </div>
  )
}

export default App
