import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Step1.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';


class Step1 extends Component {
  constructor(){
    super()

    this.state = {
      propName: '',
      propDesc: '',
      nextBtnDisable: true
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleNameChange(val){
    this.setState({propName: val})
  }

  handleDescChange(val){
    this.setState({propDesc: val})
  }

  handleNextClick(){

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="step1-content">
          <div className="step1-subHdr">
            Add new listing
            <Link to='/Dashboard'>
              <button className="step1-cancel-btn">Cancel</button>
            </Link>
          </div>

          <p>Step 1</p>
          <div className="step1-indicator">
              <img src={Active} alt="step1-active-circle" />              
              <img src={Inactive} alt="step1-inactive-circle" />
              <img src={Inactive} alt="step1-inactive-circle" />
              <img src={Inactive} alt="step1-inactive-circle" />
              <img src={Inactive} alt="step1-inactive-circle" />
          </div>

          <div className="step1-input-wpr">
            <div className="step1-input-title">Property Name</div>
            <input onChange={ (e) => this.handleNameChange(e.target.value)} 
                   className="step1-input-name" 
                   type="text"/>
            <div className="step1-input-title">Property Description</div>
            <textarea onChange={ (e) => this.handleDescChange(e.target.value)} 
                      className="step1-input-description" 
                      type="text"/>
          </div>

          <div className="step1-btn-wpr">
            <Link to='./Step2'>
              <button onClick={this.handleNextClick} 
                      className="step1-btn-next"
                      disabled={this.state.disabled}>
                      Next Step</button>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Step1;