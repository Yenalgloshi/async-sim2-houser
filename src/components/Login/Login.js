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
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginRequest = this.handleLoginRequest.bind(this);
    this.handleRegisterRequest = this.handleRegisterRequest.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/api/auth/login').then(() => {
  //   this.props.history.push('/dashboard')
  //   }).catch(response => {})
  // }

  handleUsernameChange(val){
    this.setState({username: val})
  }

  handlePasswordChange(val){
    this.setState({password: val})
  }

  handleLoginRequest(){
  //   axios.post('/api/auth/login', {
  //     username: this.state.username,
  //     password: this.state.password
  //  }).then (response => {
  //    this.props.history.push();           // Part of React History lib. Keeps track of session history; it pushes a new entry onto the history stack
  //  }).catch(response => {
  //    alert('Username and/or Password not found')
  //  })
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
            <button onClick={ this.handleLoginRequest } 
                    className="login-btn-login">
                    Login</button>
            <Link to='/Dashboard'>
              <button onClick={ this.handleRegisterRequest } 
                      className="login-btn-reg">Register</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;