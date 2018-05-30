import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Step1.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';
import { connect } from 'react-redux';
import { addPropertyInfo } from '../../redux/reducer'

class Step1 extends Component {
  constructor(props){
    super(props)
    console.log(props)
    
    this.state = {
      name: props.name,
      description: props.description,
      nextBtnDisable: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
  }

  handleNameChange(val){
    this.setState({name: val})
  }

  handleDescChange(val){
    this.setState({description: val})
  }

  handleNextBtnClick(){
    this.props.addPropertyInfo({
      name: this.state.name,
      description: this.state.description
    })
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
                   type="text"
                   value={this.state.name}/>
            <div className="step1-input-title">Property Description</div>
            <textarea onChange={ (e) => this.handleDescChange(e.target.value)} 
                      className="step1-input-description" 
                      type="text"
                      value={this.state.description}/>
          </div>

          <div className="step1-btn-wpr">
            <Link to='./Step2'>
              <button onClick={this.handleNextBtnClick} 
                      className="step1-btn-next"
                      disabled={this.state.nextBtnDisable}>
                      Next Step</button>
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
}

// mapStateToProps - this is the input for the component
// this function tells the store what data this component wants to subcribe to
function mapStateToProps(state){
  // whatever you return here will be put on the props object for this component;
  //  the key in this object will be the key on the props object
  //   the value for the key in this object will be the value for the key on the props object
  return{
    name: state.name,
    description: state.description
  }
}
// mapStateToProps is the input... what data do we want from the redux store to be put on the our component?
// action object with the action creators is the output... what action do we want to be able to trigger/dispatch a change in the redux store's state

//                           input             output
export default connect(mapStateToProps, {addPropertyInfo}) (Step1);

// this will return a new Step1 component that is now connected and subscribed to the store