import React, {Component} from "react";
import BookingList from "../components/BookingList";
import BookingForm from "../components/BookingForm";
import TableLayout from "../components/TableLayout";

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

  // componentDidMount() {
  //   const url='http://localhost:8080/bookings';
  //
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(bookings => this.setState({ bookings: bookings}))
  //     .catch(err => console.error);
  // }

  render() {
    return (
      <div className="booking-list">
        <h2>This is the RestaurantBox</h2>
        <BookingForm />
        <BookingList data={this.state.data}/>
        <TableLayout/>
      </div>
    );
  }
}

export default RestaurantBox;
