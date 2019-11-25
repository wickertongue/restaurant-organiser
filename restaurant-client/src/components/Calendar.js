import React, { Component } from "react";
import './Calendar.css'


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString(),
      modifiedDate: this.manageDate()
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value })
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
    const date = this.state.date.trim();
    if (!date) {
      return
    }
    this.props.handleSubmit({ date: date });
    this.setState({ date: '' });
  }

  render() {
    return (
        <form onSubmit={this.onSubmit}>
          <input
            type="date"
            placeholder={this.state.date}
            value={this.state.modifiedDate}
            onChange={this.handleDateChange}
            class="datepicker"
          />
          <p>state.date: {this.state.date}</p>
          <p>modifiedDate: {this.state.modifiedDate}</p>
        </form>
    )
  }
}

export default Calendar;
