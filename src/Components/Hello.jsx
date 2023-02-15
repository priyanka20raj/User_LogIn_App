import React from "react";
import './App.css';


const Hello = (props) => {
    const name=props.name
    const age=props.age
    return (
        <div>
            <h1 className="react">one,{name} {age}</h1>
        </div>
    )
}
export default Hello;