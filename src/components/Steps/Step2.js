import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Step2.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';


class Step2 extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="step2-content">
          <div className="step2-subHdr">
            Add new listing
            <Link to='/Dashboard'>
              <button className="step2-cancel-btn">Cancel</button>
            </Link>
          </div>

          <p>Step 2</p>
          <div className="step2-indicator">
              <img src={Completed} alt="step2-compCheck" />              
              <img src={Active} alt="step2-active-circle" />              
              <img src={Inactive} alt="step2-inactive-circle" />
              <img src={Inactive} alt="step2-inactive-circle" />
              <img src={Inactive} alt="step2-inactive-circle" />
          </div>

          <div className="step2-input-wpr">
            <div className="step2-input-title">Address</div>
            <input className="step2-input-address" type="text"/>

            <div className="step2-input-subWpr">
              <div className="step2-input-title">City</div>
              <input className="step2-input-city" type="text"/>

              <div className="step2-input-title">State</div>
              <input className="step2-input-state" type="text"/>
            </div>

            <div className="step2-input-title">Zip</div>
            <input className="step2-input-zip" type="text"/>
          </div>

          <div className="step2-btn-wpr">
            <Link to='./Step1'>
              <button className="step2-btn-prev">Previous Step</button>
            </Link>
            <Link to='./Step3'>
              <button className="step2-btn-next">Next Step</button>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Step2;