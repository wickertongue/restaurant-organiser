import React, {Component} from "react";
import BookingList from "../components/BookingList";
import TableLayout from "../components/TableLayout";
import ColorChange from "../components/ColorChange";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import "./RestaurantBox.css"

class RestaurantBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      tables: [],
      bookings: [],
      isLoading: true,
      selectedDate: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedDate = this.handleSelectedDate.bind(this);
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

  handleSubmit(formData) {
    console.log(formData.table)
    const customerData = null;
    const bookingData = null;
    console.log(formData)

    fetch("http://localhost:8080/customers", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }) 
      .then(res => res.json())
      .then(customer => {

        fetch("http://localhost:8080/bookings", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            time: formData.time,
            date: formData.date,
            partySize: formData.partySize,
            duration: 120,
            customer: 'http://localhost:8080/customers/' + customer.id,
            table: 'http://localhost:8080/tables/' + formData.table
          })
        })
          .then(res => res.json())
          .then(booking => {
            console.log('booking', booking)
          })
      })
  };

  handleSelectedDate(date) {
    this.setState({selectedDate: date});
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <span name="header">
          <Header 
            handleSelectedDate={this.handleSelectedDate}
          />
        </span>
        <div class="container">
          <span class="left">
            <SideBar 
              tableData={this.state.data}
              handleSubmit={this.handleSubmit} 
            />
          </span>
          <span>
            <TableLayout 
              bookingData={this.state.bookings}
              tableData={this.state.tables}
              selectedDate={this.state.selectedDate}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default RestaurantBox;
