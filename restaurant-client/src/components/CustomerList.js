import React, { Component } from 'react';
import Customer from './Customer'; 

class CustomerList extends Component {
    render () {

        return (
            <div>
            <p>I'm a customer List</p>
            <Customer /> 
            </div>
        )
    }
}
export default CustomerList