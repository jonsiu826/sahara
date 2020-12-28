import React from 'react';
import './Login.css';
import { Link } from "react-router-dom"

function Login() {
    return (
      <div className="login">
        <Link to="/">
          <img className="login_logo" src="/Sahara_logo.png" />
        </Link>
        <div className="login_container">
          <h1>Sign-in</h1>
          <form>
            <h5>Email</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="password" />
            <button className="login_signin_button">Sign In</button>
          </form>
          <p>
            By signing-in you agree to the Sahara (Amazon Clone) Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className="login_register_button">Create your Sahara Account</button>
        </div>
      </div>
    );
}

export default Login
