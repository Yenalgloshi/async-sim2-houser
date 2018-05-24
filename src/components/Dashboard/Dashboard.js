import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css';
import Header from '../Header/Header';
import data from './../../data';
import deleteX from './../../assets/delete_icon.png'

class Dashboard extends Component {
  constructor(){
    super()

    this.state = {
      rentFilter: 0,
      homeListings: []
    }
  }

  handleLogout(){

  }

  handleRentInputChange(){

  }

  handleFilterBtn(){

  }

  handleResetBtn(){

  }

  handleAddPropBtn(){

  }

  handleDelPropXBtn(){

  }


  render() {
    let homes = data.map((home, i) =>{
      return(
        <div key={i}>
          <div className="dash-listing">
            <img className="dash-listing-img" src={home.img} alt="home"/>
            <div className="dash-listing-column2">
              <div className="dash-listing-name">{home.name}</div>
              <div className="dash-listing-descript">{home.description}</div>
            </div>
            <div className="vl"></div>
            <div className="dash-listing-column3">
              <div className="dash-listing-address">Address: {home.address}</div>
              <div className="dash-listing-city">City: {home.city}</div>
              <div className="dash-listing-state">State: {home.state}</div>
              <div className="dash-listing-zip">Zip: {home.zip}</div>
              <div className="dash-listing-loan">Loan: {home.loan}</div>
              <div className="dash-listing-mortgage">Mortgage: {home.mortgage}</div>
              <div className="dash-listing-rent">Rent: {home.rent}</div>
            </div>
            <input onClick="Do something();" type="image" className="dash-listing-delX" src={deleteX} alt="delete-icon"/>
          </div>
        </div>
      )
    })

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
              <input type="text" className="dash-filter-input"/>
              <button className="dash-filter-btn">Filter</button>
              <button className="dash-reset-btn">Reset</button>
            </div>
          </div>
            <hr className="dash-divider"/>
          <div className="dash-listing-wpr">
            Home Listings
          </div>
          {homes}
        </div>
      </div>
    );
  }
}

export default Dashboard;
