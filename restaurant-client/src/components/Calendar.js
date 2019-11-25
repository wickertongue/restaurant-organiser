import React, { Component } from "react";
import './Calendar.css'


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: "",
      modifiedDate: this.manageDate()
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({ selectedDate: event.target.value })
    this.props.handleSelectedDate(event.target.value);
  }

  manageDate() {
    let today = new Date()
    const day = "" + today.getDate();
    const month = "" + (today.getMonth() + 1);
    const year = "" + today.getFullYear();
    return [year, month, day].join("-")
  }

  onSubmit(event) {
    console.log(event)
    event.preventDefault(event);
    const date = this.state.selectedDate.trim();
    if (!date) {
      return
    }
    this.props.handleSubmit({ selectedDate: date });
    this.setState({ selectedDate: '' });
  }

  // changing the 'value' in the below to the modified date will present the date in the calendar - however, there then needs to be a fetch to display the data.

  render() {
    return (
        <form onSubmit={this.onSubmit}>
          <input
            type="date"
            placeholder={this.state.selectedDate}
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            className="datepicker"
          />
          <p>state.selectedDate: {this.state.selectedDate}</p>
          <p>modifiedDate: {this.state.modifiedDate}</p>
        </form>
    )
  }
}

export default Calendar;
