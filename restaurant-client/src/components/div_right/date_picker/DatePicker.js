import React, { Component } from "react";
import './DatePicker.css'

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: "",
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({ selectedDate: event.target.value })
    this.props.handleSelectedDate(event.target.value);
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

  inputGenerator() {
    if (this.props.selectedDate == null) {
      return <input
        type="date"
        placeholder={this.props.todaysDate}
        value={this.props.todaysDate}
        onChange={this.handleDateChange}
        className="datepicker"
      />
    } else {
      return <input
        type="date"
        placeholder={this.state.selectedDate}
        value={this.state.selectedDate}
        onChange={this.handleDateChange}
        className="datepicker"
      />
    }
  }


  // changing the 'value' in the below to the modified date will present the date in the DatePicker - however, there then needs to be a fetch/setState to display the data in the table.

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.inputGenerator()}
        <p>state.selectedDate: {this.props.selectedDate}</p>
        <p>state.today: {this.props.todaysDate}</p>
      </form>
    )
  }
}

export default DatePicker;
