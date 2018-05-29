import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Step2.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';


class Step2 extends Component {
  constructor(){
    super()

    this.state = {
      address: '',
      city: '',
      state: '',
      zip: '',
      nextBtnDisabled: false
    }
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);

  }

  handleAddressChange(val){
    this.setState({address: val})
  }

  handleCityChange(val){
    this.setState({city: val})
  }

  handleStateChange(val){
    this.setState({state: val})
  }

  handleZipChange(val){
    this.setState({zip: val})
  }

  handleNextBtnClick(){
    
  }

  render() {
    return (
      <div className="App">
        <Header/>,
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
            <input onChange={ (e) => this.handleAddressChange(e.target.value)} 
                   className="step2-input-address" 
                   type="text"/>

            <div className="step2-input-subWpr">
              <div className="step2-input-city-title">City</div>
              <input onChange={ (e) => this.handleCityChange(e.target.value)} 
                     className="step2-input-city" 
                     type="text"/>

              <div className="step2-input-state-title">State</div>
              <input onChange={ (e) => this.handleStateChange(e.target.value)} 
                     className="step2-input-state" 
                     type="text"/>
            </div>

            <div className="step2-input-title">Zip</div>
            <input onChange={ (e) => this.handleZipChange(e.target.value)} 
                   className="step2-input-zip" 
                   type="text"/>
          </div>

          <div className="step2-btn-wpr">
            <Link to='./Step1'>
              <button className="step2-btn-prev">Previous Step</button>
            </Link>
            <Link to='./Step3'>
              <button onClick={this.handleNextBtnClick} 
                      className="step2-btn-next"
                      disabled={this.state.nextBtnDisabled}>
                      Next Step</button>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Step2;