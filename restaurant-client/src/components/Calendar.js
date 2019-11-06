import React, { Component } from "react";


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value })
  }


  onSubmit(event) {
    console.log(event)
    event.preventDefault(event);
    const date = this.state.date.trim();
    if (!date) {
      return
    }
    this.props.handleSubmit({ date: date});
    this.setState({ date: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        
        <input
          type="date"
          placeholder="Date"
          value={this.state.date}
          onChange={this.handleDateChange}
        />
      </form>
    )
  }
}

export default Calendar;
