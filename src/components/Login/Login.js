import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
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

  handleUsernameChange(val){
    this.setState({username: val})
  }

  handlePasswordChange(val){
    this.setState({password: val})
  }

  handleLoginRequest(){

  }

  handleRegisterRequest(){

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
            <input onChange={ (e) => this.handleUsernameChange( e.target.value )} 
                   className="login-username" 
                   type="text"/>
            <div className="login-input-title">Password</div>
            <input onChange={ (e) => this.handlePasswordChange( e.target.value )}
                   className="login-password" 
                   type="text"/>
          </div>
          <div className="login-btns">
            <Link to='/Dashboard'>
              <button onClick={ this.handleLoginRequest } className="login-btn-login">Login</button>
            </Link>
            <Link to='/Dashboard'>
              <button onClick={ this.handleRegisterRequest } className="login-btn-reg">Register</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;