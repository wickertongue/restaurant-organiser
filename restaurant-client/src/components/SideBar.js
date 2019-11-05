import React, { Component } from 'react';
import Calendar from './Calendar';
import CustomerList from './CustomerList';
import BookingForm from "../components/BookingForm";

class SideBar extends Component {
    render() {
        return (
            <div>
                <div className='calendar'>
                    <p> I'm a calendar</p>
                    <Calendar />
                </div>
                <div>
                    <BookingForm handleSubmit={this.props.handleSubmit} />
                </div>
                <div className='CustomerList'>
                    <CustomerList />
                </div>
            </div>
        );
    }
}
export default SideBar;

