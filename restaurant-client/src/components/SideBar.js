import React, { Component } from 'react';
import Calendar from './Calendar';
import CustomerList from './CustomerList';
import BookingForm from "../components/BookingForm";

class SideBar extends Component {
  render() {
    return (

      <BookingForm handleSubmit={this.props.handleSubmit} />

    );
  }
}
export default SideBar;

