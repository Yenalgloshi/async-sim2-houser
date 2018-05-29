import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Step3.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';


class Step3 extends Component {
  constructor(){
    super()

    this.state = {
      imgUrl: '',
      nextBtnDisable: false
    }
    this.handleImgUrlChange = this.handleImgUrlChange.bind(this);

  }

    handleImgUrlChange(val){
      this.setState({imgUrl: val})
    }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="step3-content">
          <div className="step3-subHdr">
            Add new listing
            <Link to='/Dashboard'>
              <button className="step3-cancel-btn">Cancel</button>
            </Link>
          </div>

          <p>Step 3</p>
          <div className="step3-indicator">
              <img src={Completed} alt="step3-compCheck" />              
              <img src={Completed} alt="step3-compCheck" />              
              <img src={Active} alt="step3-active-circle" />              
              <img src={Inactive} alt="step3-inactive-circle" />
              <img src={Inactive} alt="step3-inactive-circle" />
          </div>

          <div className="step3-input-wpr">
            <img src="https://www.myfirestorm.com/img/placeholder-img.jpg" className="step3-img-preview" alt=""/>
            <div className="step3-input-title">Image URL</div>
            <input onChange={ (e) => this.handleImgUrlChange(e.target.value)} 
                   className="step3-input-url" 
                   type="text"/>
          </div>

          <div className="step3-btn-wpr">
            <Link to='./Step2'>
              <button className="step3-btn-prev">Previous Step</button>
            </Link>
            <Link to='./Step4'>
              <button onClick={this.handleNextBtnClick} 
                      className="step3-btn-next"
                      disabled={this.state.nextBtnDisable}>
                      Next Step</button>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Step3;