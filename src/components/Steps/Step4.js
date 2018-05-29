import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Step4.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';


class Step4 extends Component {
  constructor(){
    super()

    this.state = {
      loan: 0,
      mortgage: 0,
      nextBtnDisable: false
    }
    this.handleLoanChange = this.handleLoanChange.bind(this);
    this.handleMortgageChange = this.handleMortgageChange.bind(this);
    this.handleNextBtnClick = this.handleNextBtnClick.bind(this);

  }

  handleLoanChange(val){
    this.setState({loan: val})
  }

  handleMortgageChange(val){
    this.setState({mortgage: val})
  }

  handleNextBtnClick(){

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="step4-content">
          <div className="step4-subHdr">
            Add new listing
            <Link to='/Dashboard'>
              <button className="step4-cancel-btn">Cancel</button>
            </Link>
          </div>

          <p>Step 4</p>
          <div className="step4-indicator">
              <img src={Completed} alt="step4-compCheck" />              
              <img src={Completed} alt="step4-compCheck" />              
              <img src={Completed} alt="step4-compCheck" />              
              <img src={Active} alt="step4-active-circle" />              
              <img src={Inactive} alt="step4-inactive-circle" />
          </div>

          <div className="step4-input-wpr">
            <div className="step4-input-title">Loan Amount</div>
            <input onChange={ (e) => this.handleLoanChange(e.target.value)} 
                   className="step4-input-loan" 
                   type="text"/>
            <div className="step4-input-title">Monthly Mortgage</div>
            <input onChange={ (e) => this.handleMortgageChange(e.target.value)} 
                   className="step4-input-mortgage" 
                   type="text"/>
          </div>

          <div className="step4-btn-wpr">
            <Link to='./Step3'>
              <button className="step4-btn-prev">Previous Step</button>
            </Link>
            <Link to='./Step5'>
              <button onClick={this.handleNextBtnClick} 
                      className="step4-btn-next"
                      disabled={this.state.nextBtnDisable}>
                      Next Step
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Step4;