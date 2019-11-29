import React, { Component } from 'react';
import BookingForm from "./booking_form/BookingForm";

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

