import React, { Component } from 'react';
import Calendar from "./Calendar"
import "./Header.css"

class Header extends Component {
  z
  render() {

    return (
      <div>
        <div>
          <h1>Welcome to The Cohort<br />
            <span className="subHead">Fine Dining in Edinburgh</span>
            <img src={require("./restuarant.jpg")} />
          </h1>
          <div className="calendar">
            <Calendar
              handleSelectedDate={this.props.handleSelectedDate}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default Header;