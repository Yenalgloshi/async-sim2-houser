import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';

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
    return (
      <div className="App">
        <Header/>
        <div className="dash-content">
          <div className="dash-UI">
            <button className="dash-addProp-btn">Add new property</button>
            <div className="dash-filter">
              List properties with "desired rent" greater than: $
              <input type="text" className="dash-filter-input"/>
              <button className="dash-filter-btn">Filter</button>
              <button className="dash-reset-btn">Reset</button>
            </div>
          </div>
            <hr className="dash-divider"/>
          <div className="dash-listing">
            Home Listings
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
