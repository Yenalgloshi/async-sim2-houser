import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom' ;
import './Header.css';
import Logo from './../../assets/header_logo.png';
import {delPropertyInfo} from '../../redux/reducer';
import {connect} from 'react-redux';

class Header extends Component{
  constructor(){
    super()

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    axios.post('/api/auth/logout').then (response => {
      this.props.delPropertyInfo();
      this.props.history.push('/');
      alert('Successfully logged out')
    })
    
  }

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
            <button onClick={this.handleLogout}
                    className="hdr-logout-btn">
                    Logout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, {delPropertyInfo})(Header));
