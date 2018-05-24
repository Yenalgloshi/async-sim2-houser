import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import AuthLogo from './../../assets/auth_logo.png'

class Login extends Component {
  constructor(){
    super()

    this.state = {
      username: "",
      password: "",
      btnDisable: true
    }
  }
  render() {
    return(
      <div className="App">
        <div className="login-content">
          <div className="login-logo">
            <img src={AuthLogo} alt="houser-logo"/>
          </div>
          <div className="login-inputs">
            <div className="login-input-title">Username</div>
            <input className="login-username" type="text"/>
            <div className="login-input-title">Password</div>
            <input className="login-password" type="text"/>
          </div>
          <div className="login-btns">
            <Link to='/Dashboard'>
              <button className="login-btn-login">Login</button>
            </Link>
            <Link to='/Dashboard'>
              <button className="login-btn-reg">Register</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;