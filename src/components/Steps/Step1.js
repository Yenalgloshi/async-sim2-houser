import React, { Component } from 'react';
import './Step1.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';

class Step1 extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="step1-content">
          <div className="step1-subHdr">
            <h1>Add new listing</h1>
            <button className="step1-cancel-btn">Cancel</button>
          </div>

          <p>Step 1</p>
          <div className="step1-indicator">
            <img src={Inactive} alt="inactive-circle" />
            <img src={Inactive} alt="inactive-circle" />
            <img src={Inactive} alt="inactive-circle" />
            <img src={Inactive} alt="inactive-circle" />
            <img src={Inactive} alt="inactive-circle" />
          </div>

          <div className="step1-input-wpr">
            <h3>Property Name</h3>
            <input className="step1-input-name" type="text"/>
            <h3>Property Description</h3>
            <input className="step1-input-description" type="text"/>
          </div>

          <div className="step1-btn-wpr">
            <button className="step1-btn-next">Next Step</button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Step1;