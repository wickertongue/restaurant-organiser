import React, { Component } from 'react'; 
import Calendar from './Calendar';

class SideBar extends Component { 
    render () { 
        return (
            <div className='calendar'> 
                <p> I'm a calendar</p>
                <Calendar /> 
            </div>
        )
    }
}
export default SideBar; 

