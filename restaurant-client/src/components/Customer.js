import React, { Component } from 'react'; 

class Customer extends Component {
    render() {

        return (
            <div>
                <h3>I'm a customer</h3>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
export default Customer;
