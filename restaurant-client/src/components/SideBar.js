import React, { Component } from 'react';
import BookingForm from "../components/BookingForm";

class SideBar extends Component {
    render() {
        return (

            <BookingForm handleSubmit={this.props.handleSubmit} />

        );
    }
}
export default SideBar;

