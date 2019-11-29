import React, { Component } from "react";
import './BookingForm.css';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      partySize: '',
      table: null
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handlePartySizeChange = this.handlePartySizeChange.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }
  handleDateChange(event) {
    this.setState({ date: event.target.value })
  }
  handleTimeChange(event) {
    this.setState({ time: event.target.value })
  }
  handlePartySizeChange(event) {
    this.setState({ partySize: event.target.value })
  }
  handleTableChange(event) {
    console.log(event)
    this.setState({ table: event.target.value })
  }

  onSubmit(event) {
    console.log(event)
    event.preventDefault(event);
    const name = this.state.name.trim();
    const date = this.state.date.trim();
    const time = this.state.time.trim();
    const partySize = this.state.partySize.trim();
    const table = this.state.table.trim();
    if (!name || !date || !time || !partySize || !table) {
      return
    }
    this.props.handleSubmit({ name: name, date: date, time: time, partySize: partySize, table: table });
    this.setState({ name: '', date: '', time: '', partySize: '', table: '' });
  }

  render() {
    return (
      <form className="bookingform" onSubmit={this.onSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <th>Name: </th>
                <td>
                  <input
                  type="text"
                  placeholder="Customer Name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  />
                </td>
            </tr>
            <tr>
              <th>Date: </th>
                <td>
                  <input
                    type="date"
                    placeholder="Date"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                  />
                </td>
            </tr>
            <tr>
            <th>Time: </th>
              <td>
                <input
                  type="time"
                  placeholder="Time"
                  value={this.state.time}
                  onChange={this.handleTimeChange}
                />
              </td>
            </tr>
            <tr>
              <th>Party Size: </th>
              <td>
                <input
                  type="text"
                  placeholder="Party Size"
                  value={this.state.partySize}
                  onChange={this.handlePartySizeChange}
                />
              </td>
            </tr>
            <tr>
              <th>Table No: </th>
              <td>
                <select onChange={this.handleTableChange}>
                  <option value={this.state.table}>1</option>
                  <option value={this.state.table}>2</option>
                  <option value={this.state.table}>3</option>
                  <option value={this.state.table}>4</option>
                  <option value={this.state.table}>5</option>
                  <option value={this.state.table}>6</option>
                </select>
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <input className="submit" type="submit" value="Make Booking" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}

export default BookingForm;
