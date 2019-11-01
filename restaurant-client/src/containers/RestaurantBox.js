import React, {Component} from "react";
import BookingList from "../components/BookingList";

class RestaurantBox extends Component {


  render() {
    return (
      <div className="booking-list">
        <h2>This is the RestaurantBox</h2>
        <BookingList />
      </div>
    );
  }
}

export default RestaurantBox;
