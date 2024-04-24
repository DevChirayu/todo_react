import React from "react";
import './App.css';
import ParentComponent from "./ParentComponent";
function App(){
  return(
    <div className="App">
      <h1>React Props Example</h1>
      <ParentComponent/>
    </div>
  )
}

export default App;