import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function LogIN() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="blue">{errorMessages.message}</div> 
    );

  // JSX code for login form
  const renderForm = (
    <div className="blue2"> 
      <form onSubmit={handleSubmit}>
        <div className="blue3">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="blue4"> 
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="blue5"> 
          <Link to='/patientrecord'><input type="submit" /></Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className="blue6"> 
      <div className="blue12">Bodhi Plus</div> 
        <div className="blue13">Welcome Back </div> 
      <div className="blue7"> 
      <div className="blue8"> 
        <div className="blue9">Sign In</div> 
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}<br></br>
        <div className="blue14">
      <button> <div className="blue10"><Link to='/password'><h4 className="blue15">Forgot Password?</h4></Link></div> </button> <br></br> 
    
      
      <button> <div className="blue11"><Link to='/Registration'><h4 className="blue16">Don't have an account?</h4></Link></div> </button> 
      </div>
      
      </div>
    </div>
    </div>
  );
}

export default LogIN;