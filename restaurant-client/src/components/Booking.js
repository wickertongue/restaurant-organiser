import React, { Component } from "react";


class Booking extends Component {
  render() {
    return (
      <div className="booking">
        <p>{this.props.name}</p>
        <p>{this.props.date}</p>
        <p>{this.props.time}</p>
        <p>{this.props.partySize}</p>
        <p>{this.props.duration}</p>
        <p>{this.props.tableId}</p>
      </div>
    )
  }
}

export default Booking;
