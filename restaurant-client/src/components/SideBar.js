import React, { Component } from 'react'; 
import Calendar from './Calendar';
import CustomerList from './CustomerList'; 

class SideBar extends Component { 
    render () { 
        return (
            <div> 
            <div className='calendar'> 
                <p> I'm a calendar</p>
                <Calendar /> 
            </div>
            <div className='CustomerList'> 
                <CustomerList /> 
            </div>
            </div>
        );
    }
}
export default SideBar; 

