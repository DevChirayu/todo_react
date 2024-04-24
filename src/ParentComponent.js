import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent(){
    return (
        <div>
            <h2>ParentComponent</h2>
            <ChildComponent name="Chirayu" age={30}/>
        </div>
    )
}
export default ParentComponent;