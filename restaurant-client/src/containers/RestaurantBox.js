import React, {Component} from "react";
// import BookingList from "../components/BookingList";
// import BookingForm from "../components/BookingForm";

class RestaurantBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      isLoading: true,
      bookings: []
    }
  }

  async componentDidMount() {
    const customersFetch = await fetch("http://localhost:8080/customers")
    const customers = await customersFetch.json();

    this.setState({
      customers: customers["_embedded"].customers,
    });

    const bookingFetch = await fetch("http://localhost:8080/bookings")
    const bookings = await bookingFetch.json();

    this.setState({
      bookings: bookings["_embedded"].bookings,
    });



    this.setState({ isLoading: false})
  }


  render() {
    const { customers, bookings, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="booking-list">
        <h2>This is the RestaurantBox</h2>
        <p> {this.state.customers[0].name} </p>
        <p> {this.state.bookings[0].time} </p>
        {/* <BookingForm />
        <BookingList data={this.state.data}/> */}
      </div>
    );
  }
}

export default RestaurantBox;
