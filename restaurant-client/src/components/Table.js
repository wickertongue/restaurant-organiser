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
    return (
      <div
        className="table1"
        style={{ backgroundColor: this.state.bgColor }}
        onClick={this.boxClick}>
        <p>Table {this.props.tableData.id}</p>
        {this.showBookingIfExists()}
      </div>
    )
  }
}

export default Table;