import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Step5.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';


class Step5 extends Component {
  constructor(){
    super()

    this.state = {
      rent: 0,
      completeBtnDisable: false
    }
    this.handleRentChange = this.handleRentChange.bind(this);

  }

  handleRentChange(val){
    this.setState({rent: val})
  }

  handleCompleteBtnClick(){
    
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="step5-content">
          <div className="step5-subHdr">
            Add new listing
            <Link to='/Dashboard'>
              <button className="step5-cancel-btn">Cancel</button>
            </Link>
          </div>

          <p>Step 5</p>
          <div className="step5-indicator">
              <img src={Completed} alt="step5-compCheck" />              
              <img src={Completed} alt="step5-compCheck" />              
              <img src={Completed} alt="step5-compCheck" />              
              <img src={Completed} alt="step5-compCheck" />              
              <img src={Active} alt="step5-active-circle" />              
          </div>

          <div className="step5-rent-calc">Recommended Rent $</div>
          <div className="step5-input-wpr">
            <div className="step5-input-title">Desired Rent</div>
            <input onChange={(e) => this.handleRentChange(e.target.value)} 
                   className="step5-input-rent" 
                   type="text"/>
          </div>

          <div className="step5-btn-wpr">
            <Link to='./Step4'>
              <button className="step5-btn-prev">Previous Step</button>
            </Link>
            <Link to='./Dashboard'>
              <button onClick={this.handleCompleteBtnClick} 
                      className="step5-btn-complete"
                      disabled={this.state.completeBtnDisable}>
                      Complete</button>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Step5;