import React, {Component} from "react";
import Booking from "./Booking";

class BookingList extends Component {
  render() {
    return (
      <div className="booking">
        <p>I'm a booking list</p>
        <Booking />
      </div>
    )
  }
}

export default BookingList;
