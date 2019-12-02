import React, {Component} from "react";
import TableLayout from "../components/div_right/tables/TableLayout";
import Header from "../components/div_left/header/Header";
import DatePicker from "../components/div_right/date_picker/DatePicker"

import "./RestaurantBox.css"
import BookingForm from "../components/div_left/booking_form/BookingForm";

class RestaurantBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      tables: [],
      bookings: [],
      isLoading: true,
      selectedDate: this.formatTodaysDate()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedDate = this.handleSelectedDate.bind(this);
  }

  async bookingsFetch() {
    const bookingData = await fetch("http://localhost:8080/bookings")
    const bookings = await bookingData.json();
    this.setState({
      bookings: bookings._embedded.bookings,
    })
  }

  async customersFetch() {
    const customerData = await fetch("http://localhost:8080/customers")
    const customers = await customerData.json();
    this.setState({
      customers: customers._embedded.customers,
    })
  }

  async tablesFetch() {
    const tableData = await fetch("http://localhost:8080/dinnerTables")
    const tables = await tableData.json();
    this.setState({
      tables: tables._embedded.dinnerTables,
    })
  }

  async componentDidMount() {
    // this.customersFetch()
    this.bookingsFetch()
    this.tablesFetch()
    this.setState({ isLoading: false })
  }

  handleSubmit(formData) {

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
          .then((res) => res.json())
          .then(this.bookingsFetch())
      })
  };

  handleSelectedDate(date) {
    this.setState({ selectedDate: date });
  }

  // the below needs to be able to add a leading zero before the start of the day in the month as the 0 is begin removed and this means the date cannot be picked up by the datepicker.

  formatTodaysDate() {
    let today = new Date()
    const day = "" + today.getDate();
    const month = "" + (today.getMonth() + 1);
    const year = "" + today.getFullYear();
    return [year, month, day].join("-")
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="main">
        <div className="left">
          <Header 
            handleSelectedDate={this.handleSelectedDate}
          />
          <BookingForm 
            tableData={this.state.data}
            handleSubmit={this.handleSubmit}
          />
        </div> 
        <div className="right">
          <DatePicker
            handleSelectedDate={this.handleSelectedDate}
            selectedDate={this.state.selectedDate}
          />
          <TableLayout 
            bookingData={this.state.bookings}
            tableData={this.state.tables}
            selectedDate={this.state.selectedDate}
          />
        </div>
      </div>
    );
  }
}

export default RestaurantBox;
