import React, { Component } from 'react';
import Calendar from "./Calendar"
import "./Header.css"

class Header extends Component {
  z
  render() {

    return (
      <div>
        <h1>Welcome to The Cohort</h1>
          <h2>Fine Dining in Edinburgh</h2>
          {/* <img src={require("./restuarant.jpg")} /> */}
        <span className="calendar">
          <Calendar
            handleSelectedDate={this.props.handleSelectedDate}
          />
        </span>
      </div>
    );
  }
}

export default Header;