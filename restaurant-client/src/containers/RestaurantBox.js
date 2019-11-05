import React, {Component} from "react";
import BookingList from "../components/BookingList";
import TableLayout from "../components/TableLayout";
import ColorChange from "../components/ColorChange";
import SideBar from "../components/SideBar";
import "./RestaurantBox.css"

class RestaurantBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      tables: [],
      bookings: [],
      isLoading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {

    // customer fetch
    const customersFetch = await fetch("http://localhost:8080/customers")
    const customers = await customersFetch.json();
    this.setState({
      customers: customers["_embedded"].customers,
    });

    // booking fetch
    const bookingFetch = await fetch("http://localhost:8080/bookings")
    const bookings = await bookingFetch.json();
    this.setState({
      bookings: bookings["_embedded"].bookings,
    });

    // table fetch
    const tableFetch = await fetch("http://localhost:8080/dinnerTables")
    const tables = await tableFetch.json();
    this.setState({
      tables: tables["_embedded"].dinnerTables,
    });

    this.setState({ isLoading: false})
  }

    handleSubmit() {
      console.log("You managed to use handleSubmit, well done!")
    }


  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="booking-list">
        <h1>Welcome to The Cohort<br /><span className ="subHead">Fine Dining in Edinburgh</span></h1>
        <div className="left" >
          <SideBar /> 
        </div>
        <div className="right">
          <TableLayout data={this.state.bookings}/>
        </div>
      </div>
    );
  }
}

export default RestaurantBox;
