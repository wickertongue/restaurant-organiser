import React, {Component} from "react";
import Booking from "./Booking";

class BookingList extends Component {
  render() {

    const bookingNodes = this.props.data.map(booking => {
      return (
        <Booking key={booking.id} name={booking.name} date={booking.date} time={booking.time} partySize={booking.partySize} tableId={booking.tableId}></Booking>
      );
    });

    return (
      <div className="booking">
        <p>I'm a booking list</p>
        <Booking />
        {bookingNodes}
      </div>
    )
  }
}

export default BookingList;
