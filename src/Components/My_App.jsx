import React from "react";
import './App.css';



const My_App = (props) => {
    const name=props.name

    return(
        <h1 className="My_App">{name}</h1>
    )
}

export default My_App;