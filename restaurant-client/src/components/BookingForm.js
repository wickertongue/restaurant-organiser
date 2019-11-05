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
            table: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this); 
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this); 
        this.handlePartySizeChange = this.handlePartySizeChange.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this); 
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

    onSubmit(event) {
        event.preventDefault(event);
        this.props.handleSubmit();
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
      <form className="booking-form" onSubmit={this.onSubmit}>
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
          <select onChange={this.handleTableChange}>
          <option value={this.state.table}>1</option>
          <option value={this.state.table}>2</option>
          <option value={this.state.table}>3</option>
          <option value={this.state.table}>4</option>
          <option value={this.state.table}>5</option>
          <option value={this.state.table}>6</option>
          </select>

        <input type="submit" value="Make Booking" />
      </form>
    )
  }
}

export default BookingForm;
