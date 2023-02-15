import React, { useState } from "react";
import "./App.css";

/**UserLogIn component */
const UserLogin = (props) => {
  /**State Managment for all fields */
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userid, setUserId] = useState("");
  const [college, setCollege] = useState("");
  const [age, setAge] = useState("");
  /** Function for Reset Button */
  const handleReset = () => {
    setName("");
    setPassword("");
    setUserId("");
    setCollege("");
    setAge("");
  };
  /**HTML code for UserLogIn */
  return (
    <div className="main-box">
      <div className="user-box">
        <label>UserName:</label>
        <input
          type="text"
          placeholder="Enter UserName..."
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
          onChange={(e) => setPassword(e.target.value)}
        />
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
        ></input>
      </div>
      <div className="age-box">
        <label>Age:</label>
        <input
          type="text"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="button-box">
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button
          type="button"
          disabled={!(name && userid && password && college && age)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default UserLogin;
