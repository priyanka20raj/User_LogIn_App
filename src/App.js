import React from "react";
// import "./App.css";
import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
import Detail from "./Components/Detail";
// import Login from "./Components/Login";
// import SignUp from "./Components/SignUp";
import UserLogin from "./Components/UserLogIn";

/** App Component */
function App() {
  return (
      <Router>
      <div style={{display: "flex", fontSize: "26px", justifyContent: "space-between"}}>
        <Link to="/aboutOne">AboutOne</Link>
        <Link to="/homeTwo">HomeTwo</Link>
        <Link to="/detailThree">DetailThree</Link>
        <Link to="/loginFour">LoginFour</Link>
        <Link to="/signupFive">SignUpFive</Link>

      </div>
      <div style={{border: "2px solid black", width: "1000px", height:"600px", marginTop:"40px", marginLeft:"20%"}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/homeOne" element={<Home />}/>
          <Route path="/aboutTwo" element={<UserLogin />}/>
          <Route path="/DetailThree" element={<Detail />}/>
          <Route path="/loginFour" element={<UserLogin />}/>
          <Route path="/signupFive" element={<UserLogin />}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
