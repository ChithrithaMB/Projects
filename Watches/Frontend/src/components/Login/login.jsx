import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className='login-page'>
      <span className='App-name-1'><b>TIMES SQUARES</b></span>
        <div className='login-box'>
          
          <div className='login-div'>
            <span className='login-text'><b>   Sign in   </b></span>
          </div>

          <div className='loginbtn-div'>
          <Link to="/logincustomer"><button className='customer-btn'>Sign In as Customer</button></Link>
          </div>

          <div className='admin-button-div'>
            <Link to="/loginadmin"><button className='adm-btn'> Sign In as Admin</button></Link>
          </div>

          <div className='signuplink-div'>
            <span className='signuplink-txt1'>Not a member ?</span>
            <Link to='/signupquery'>
              <span className='signuplink-txt2'><u>Sign up now</u></span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;