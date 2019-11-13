import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: '#8EE4AF'
    }
  }

  boxClick = () => {
    if (this.state.bgColor === '#8EE4AF') {
      this.setState({ bgColor: '#FC4445' })
    } else {
      this.setState({ bgColor: '#8EE4AF' })
    }
  }

  showBookingsBySelectedDate() {
    if (!this.props.tableData._embedded) {
      return [];
    }
    return this.props.tableData._embedded.bookings.filter(booking => {
      return this.props.selectedDate === booking.date
    })
  }

  render() {
    const { tableData } = this.props
    const { bookingData } = this.props
    const filteredBookingsByDate = this.showBookingsBySelectedDate();
    const bookingSpans = filteredBookingsByDate.map(booking =>
      <span
        key={booking.id}>
        <p>Name: {booking.customer.name}</p>
        <p>Booked on: {booking.date}</p>
        <p>At: {booking.time}</p>
      </span>
    )

    return (
      <div
        className="table"
        style={{ backgroundColor: this.state.bgColor }}
        onClick={this.boxClick}>
        <h3>Table {this.props.tableData.id}</h3>
        {bookingSpans}
      </div>
    )
  }
}

export default Table;