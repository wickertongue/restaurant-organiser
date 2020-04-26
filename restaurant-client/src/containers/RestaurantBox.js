import React, {Component} from "react";
import TableLayout from "../components/table_layout/TableLayout.js";
import SideBar from "../components/sidebar/SideBar";
import Header from "../components/header/Header";
import Calendar from "../components/calendar/Calendar"

import "./RestaurantBox.css"

class RestaurantBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      tables: [],
      bookings: [],
      isLoading: true,
      selectedDate: '2020-04-26'
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

    this.setState({ isLoading: false })

    this.formatDate()

  }

  formatDate() {
    const today = new Date();
    const year = '' + today.getFullYear()
    let month = '' + (today.getMonth() + 1)
    let day = today.getDate()

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    const date = [year, month, day].join('-')

    console.log(today)
    console.log(date)
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
          .then((res) => res.json())
          .then(booking => {
            const newBookings = [...this.state.bookings, booking] 
            this.setState({ bookings: newBookings });
          })
      })
  };

  handleSelectedDate(date) {
    this.setState({ selectedDate: date });
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
          <SideBar
            tableData={this.state.data}
            handleSubmit={this.handleSubmit}
          />
        </div> 
        <div className="right">
          <Calendar
            handleSelectedDate={this.handleSelectedDate}
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
