import React, { Component } from 'react';
import BookingForm from "../components/BookingForm";

class SideBar extends Component {
  render() {
    return (
      <div>
        <BookingForm handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}
export default SideBar;

