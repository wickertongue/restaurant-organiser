import React, { Component } from 'react';
import Calendar from "./Calendar"
import "./Header.css"

class Header extends Component {
  render() {

    return (
      <div> 
        <h1>Welcome to The Cohort</h1>
        <h2>Fine Dining in Edinburgh</h2>
          <Calendar 
              handleSelectedDate={this.props.handleSelectedDate}
          /> 
      </div>
      );
  }
}

export default Header;