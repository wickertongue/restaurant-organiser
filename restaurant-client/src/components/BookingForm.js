import React, { Component } from "react";

class BookingForm extends Component {
  render() {
    return(
      <form className="booking-form">
        <input
          type="text"
          placeholder="Customer Name"
        />
        <input
          type="date"
          placeholder="Date"
        />
        <input
          type="text"
          placeholder="Time"
        />
        <input
          type="text"
          placeholder="Party Size"
        />
        <input
          type="text"
          placeholder="Table"
        />
        <input type="submit" value="Make Booking" />
      </form>
    )
  }
}

export default BookingForm;
