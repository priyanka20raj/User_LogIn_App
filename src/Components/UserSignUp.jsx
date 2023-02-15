import React from "react";
import './App.css';

const UserSignUp =(props) => {
    const name=props.name
    const age=props.age
    return (
        <div>
            <h1 className="react">hi, {name} {age}</h1>

        </div>
    )
};
export default UserSignUp;