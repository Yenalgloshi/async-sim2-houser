import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import Header from '../Header/Header';
// import data from './../../data';
import deleteX from './../../assets/delete_icon.png'

class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      rentFilter: 0,
      allHomeListings: [],
      filterHomeListings: []
    }
    this.handleRentInputChange = this.handleRentInputChange.bind(this);
    this.handleResetBtn = this.handleResetBtn.bind(this);
    this.handleFilterBtn = this.handleFilterBtn.bind(this);
  }

  componentDidMount() {
    axios.get('/api/properties').then(response => {
      this.setState({allHomeListings: response.data})
    })
  }
  
  handleLogout(){
    
  }
  
  handleRentInputChange(val){
    this.setState({rentFilter: val})
  }
  
  handleFilterBtn(){
    let filtered = this.state.allHomeListings.filter((obj,i,arr) => obj.rent >= this.state.rentFilter);
    this.setState({filterHomeListings: filtered});
  }
  
  handleResetBtn(){
    this.setState({rentFilter: 0, filterHomeListings: []})
  }
  
  handleAddPropBtn(){
    
  }
  
  handleDelPropXBtn(){
    let promise = axios.delete('/api/product/:id')
    promise.then( res => {})
  }
  
  
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="dash-content">
          <div className="dash-UI">
            <Link to='/Step1'>
            <button className="dash-addProp-btn">Add new property</button>
            </Link>
            <div className="dash-filter">
              List properties with "desired rent" greater than: $
              <input onChange={ (e) => this.handleRentInputChange(e.target.value)}
                     type="text" 
                     className="dash-filter-input"
                     value={this.state.rentFilter}/>
              <button onClick={this.handleFilterBtn}
                      className="dash-filter-btn">
                      Filter</button>
              <button onClick={this.handleResetBtn}
                      className="dash-reset-btn">
                      Reset</button>
            </div>
          </div>
            <hr className="dash-divider"/>
          <div className="dash-listing-wpr">
            Home Listings
          </div>
          
            { this.state.filterHomeListings.length === 0 
              ? this.state.allHomeListings.map((home, i) =>{
                return(
                    <div key={i} className="dash-listing">
                      <img className="dash-listing-img" src={home.img_url} alt="home"/>
                      <div className="dash-listing-column2">
                        <div className="dash-listing-name">{home.prop_name}</div>
                        <div className="dash-listing-descript">{home.prop_desc}</div>
                      </div>
                      <div className="vl"></div>
                      <div className="dash-listing-column3">
                        <div className="dash-listing-address">Address: {home.address}</div>
                        <div className="dash-listing-city">City: {home.city}</div>
                        <div className="dash-listing-state">State: {home.state}</div>
                        <div className="dash-listing-zip">Zip: {home.zip}</div>
                        <div className="dash-listing-loan">Loan: {home.loan_amt}</div>
                        <div className="dash-listing-mortgage">Mortgage: {home.mon_mort}</div>
                        <div className="dash-listing-rent">Rent: {home.rent}</div>
                      </div>
                      <input onClick={this.handleDelPropXBtn} 
                             type="image" 
                             className="dash-listing-delX" 
                             src={deleteX} 
                             alt="delete-icon"/>
                    </div>
                )
              })   
              :   this.state.filterHomeListings.map((home, i) =>{
                return(
                    <div key={i} className="dash-listing">
                      <img className="dash-listing-img" src={home.img_url} alt="home"/>
                      <div className="dash-listing-column2">
                        <div className="dash-listing-name">{home.prop_name}</div>
                        <div className="dash-listing-descript">{home.prop_desc}</div>
                      </div>
                      <div className="vl"></div>
                      <div className="dash-listing-column3">
                        <div className="dash-listing-address">Address: {home.address}</div>
                        <div className="dash-listing-city">City: {home.city}</div>
                        <div className="dash-listing-state">State: {home.state}</div>
                        <div className="dash-listing-zip">Zip: {home.zip}</div>
                        <div className="dash-listing-loan">Loan: {home.loan_amt}</div>
                        <div className="dash-listing-mortgage">Mortgage: {home.mon_mort}</div>
                        <div className="dash-listing-rent">Rent: {home.rent}</div>
                      </div>
                      <input onClick={this.handleDelPropXBtn} 
                             type="image" 
                             className="dash-listing-delX" 
                             src={deleteX} 
                             alt="delete-icon"/>
                    </div>
                )
              })
            }

        </div>
      </div>
    );
  }
}

export default Dashboard;
