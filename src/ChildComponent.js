import React from "react";

function ChildComponent(props){
    return (
        <div>
            <h3>Child Component</h3>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default ChildComponent;