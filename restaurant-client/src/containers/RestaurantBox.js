import React, {Component} from "react";
import BookingList from "../components/BookingList";

class RestaurantBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Jim Smith",
          date: "05/11/2019",
          time: "19:00",
          partySize: 2,
          tableId: 6
        },
        {
          id: 2,
          name: "Kevin O'Rouke",
          date: "07/11/2019",
          time: "20:00",
          partySize: 8,
          tableId: 4
        }
      ]
    }
  }

  render() {
    return (
      <div className="booking-list">
        <h2>This is the RestaurantBox</h2>
        <BookingList data={this.state.data}/>
      </div>
    );
  }
}

export default RestaurantBox;
