import React, {Component} from 'react';
import './Table.css'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: '#FE8019'
    }
  }

  boxClick = () => {
    if (this.state.bgColor === '#FE8019') {
      this.setState({ bgColor: '#8EE4AF' })
    } else {
      this.setState({ bgColor: '#FE8019' })
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

    const filteredBookingsByDate = this.showBookingsBySelectedDate();
    filteredBookingsByDate.map(booking =>
      <span key={booking.id}>
          <table>
            <tr>
              <th>Name:</th>
              <td key={booking.id}>{booking.customer.name}</td>
            </tr>
            <tr>
              <th>Date:</th>
              <td key={booking.id}>{booking.date}</td>
            </tr>
            <tr>
              <th>Time:</th>
              <td key={booking.id}>{booking.time}</td>
            </tr>
          </table>
      </span>
    )

    return (
      <div
        className="singletable"
        style={{ backgroundColor: this.state.bgColor }}
        onClick={this.boxClick}
      >
        <h3>Table {this.props.tableData.id}</h3>
        {
          filteredBookingsByDate.map(booking =>
            <span>
              <p>Name: {booking.customer.name}</p>
              <p>Booked on: {booking.date}</p>
              <p>At: {booking.time}</p>
            </span>
          )
        }
      </div>
    )
  }
}

export default Table;