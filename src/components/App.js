
import React from "react";
import './../styles/App.css';

const App = () => {
  const data= { temperature: 25, conditions: "Sunny" };
  const treshold= 20 ;
  const tempColor=data.temperature>treshold?'red':'blue';

  return (
    <div>
         <p >
         Temperature: <span style={{color:tempColor}}>{data.temperature}</span>
         </p>
         <p>
           Conditions: {data.conditions}
         </p>
    </div>
  )
}

export default App
