import React, { useState } from "react";
import'./App.css';

const NewOne = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState('');
    const [userid, setUserId] = useState("");
  const [college, setCollege] = useState("");
  const [age, setAge] = useState("");
  const [FatherName, setFatherName] =useState('');
  const handleReset = () => {
    setName("");
    setPassword("");
    setUserId("");
    setCollege("");
    setAge("");
    setFatherName("");
  };
    return( 
        <div className="main-box">
            <div className="user-box">
            <label>UserName</label>
            <input
            type="text"
            placeholder="Enter Name...."
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="password-box">
                <label>Password:</label>
                <input 
                type="password"
                placeholder="Enter Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="userid-box">
                <label>UserId:</label>
                <input 
                type="text"
                placeholder="Enter UserId..."
                value={userid}
                onChange={(e) => setUserId(e.target.value)}
                 />
            </div>
            <div className="college-box">
                <label>College:</label>
                <input
                type="text"
                placeholder="Enter College..."
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                />
            </div>
            <div className="age-box">
                <label>Age:</label>
                <input 
                type="text"
                placeholder="EnterAge..."
                value={age}
                onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="father-name-box">
                <label>Father-Name:</label>
                <input type="text"
                placeholder="Enter Father-Name..."
                value={FatherName}
                onChange={(e) => setFatherName(e.target.value)} 
                />

            </div>
            <div className="button-box">
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button
          type="button"
          disabled={!(name && userid && password && college && age && FatherName)}
        >
          Submit
        </button>
      </div>
    </div>
  );
    }
export default NewOne;