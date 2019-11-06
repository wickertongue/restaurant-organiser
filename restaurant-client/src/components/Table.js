import React, {Component} from 'react';

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

  // function(bookingId) {
  //   findCustomerByBookingId(bookingId)


  //   bookingId
  // }

  render() {
    const { tableData } = this.props
    const { bookingData } = this.props

    return (
      <div
        className="table1"
        style={{ backgroundColor: this.state.bgColor }}
        onClick={this.boxClick}>
        <p>Table {this.props.tableData.id}</p>

        {
          tableData._embedded && 
          tableData._embedded.bookings.map(booking =>
            <span
            key={booking.id}>
              <p>Booked on: {booking.date}</p>
              <p>At: {booking.time}</p>
            </span>
          )
        }
        { bookingData &&
          bookingData.map(booking =>
          <span 
          key={booking.id}>
            <p>{booking._embedded.customer.name}</p>
            <p>{booking._embedded.table.id}</p>
          </span>
        )}
      </div>
    )
  }
}

export default Table;