import React, { Component } from "react";

class BookingForm extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: '',
            date: '',
            time: '',
            partySize: '',
            table: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this); 
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this); 
        this.handlePartySizeChange = this.handlePartySizeChange.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }
    handleDateChange(event) {
        this.setState({date: event.target.value})
    }
    handleTimeChange(event) {
      this.setState({time: event.target.value})
    }
    handlePartySizeChange(event) {
      this.setState({partySize: event.target.value})
    }
    handleTableChange(event) {
      this.setState({table: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.name.trim(); 
        const date = this.state.date.trim();
        const time = this.state.time.trim();
        const partySize = this.state.partySize.trim(); 
        const table = this.state.table.trim();
        if (!name || !date || !time || !partySize || !table ) {
          return
        }
        this.setState({name:'', date: '', time: '', partySize: '', table: ''});
    }
  render() {
    return(
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={this.state.name}
          onChange={this.handleNameChange}

        />
        <input
          type="date"
          placeholder="Date"
          value={this.state.date}
          onChange={this.handleDateChange}
        />
        <input
          type="time"
          placeholder="Time"
          value={this.state.time}
          onChange={this.handleTimeChange}
        />
        <input
          type="text"
          placeholder="Party Size"
          value={this.state.partySize}
          onChange={this.handlePartySizeChange}
        />
        <input
          type="text"
          placeholder="Table"
          value={this.state.table}
          onChange={this.handleTableChange}
        />
        <input type="submit" value="Make Booking" />
      </form>
    )
  }
}

export default BookingForm;
