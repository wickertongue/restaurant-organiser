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

  showBookingIfExists(props) {
    const objectSize = Object.keys(this.props.tableData).length

    if (objectSize >= 4) {
      const dateOfBooking = this.props.tableData["_embedded"].bookings[0].date;
      const timeOfBooking = this.props.tableData["_embedded"].bookings[0].time;
      return <div>      
      <p>Booked on: {dateOfBooking}</p>
      <p>At: {timeOfBooking}</p>
      </div>
    } else {
      return <p>Currently Available</p>
    }
  }

  render() {
    const { tableData } = this.props

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
      </div>

      // for each booking, in booking array, create booking

      // <div>

      //   {this.props.map(table =>
      //     <Table
      //       tableData={table}
      //       key={table.id} />)
      //   }



      // </div>

      


      // {/* <div className="wrapper">
      //   {this.props.tableData["_embedded"].bookings.map(booking => 
      //     <p>Hello!</p>)
      //   }
      // </div> */}

    )
  }
}

export default Table;