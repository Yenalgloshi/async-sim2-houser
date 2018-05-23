import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Logo from './../../assets/header_logo.png';

class Header extends Component{
  render(){
    return (
      <div className="App">
        <div className="hdr-wpr">
          <div className="hdr-logo">
            <img src={Logo} alt="houser-logo" />
          </div>    
          <div className="hdr-bold-txt"> 
            Houser 
          </div>
          <div className="hdr-txt"> 
            Dashboard
          </div>
          <div className="hdr-logout">
            <Link to='/'>
              Logout
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
