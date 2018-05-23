import React, { Component } from 'react';
import './Dashboard.css';

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
        <div className="header">
          This is where the Header goes
        </div>
        <div className="dash-content">
          <div className="dash-UI">
            <button className="dash-addProp-btn">Add New Property</button>
            <div className="dash-filter">
              List properties with "desired rent" greater than: $
              <input type="text"/>
              <button className="dash-filter-btn">Filter</button>
              <button className="dash-reset-btn">Reset</button>
            </div>
          </div>

          <div className="dash-listing">
            Home Listings
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
