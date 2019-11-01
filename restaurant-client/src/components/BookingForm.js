import React, { Component } from "react";

class BookingForm extends Component {
  render() {
    return(
      <form className="booking-form">
        <input
          type="text"
          placeholder="Customer Name"
        />

      </form>
    )
  }
}

export default BookingForm;
