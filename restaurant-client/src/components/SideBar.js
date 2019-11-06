import React, { Component } from 'react'; 
import Calendar from './Calendar';
import CustomerList from './CustomerList'; 
import BookingForm from "../components/BookingForm";

class SideBar extends Component { 
    render () { 
        return (
            <div> 
        
            <div> 
            <BookingForm handleSubmit={this.handleSubmit} />
            </div>
            <div className='CustomerList'> 
                <CustomerList /> 
            </div>
            </div>
        );
    }
}
export default SideBar; 

