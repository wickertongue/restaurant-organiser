import React, { Component } from 'react';
import "./TableLayout.css";
import RestaurantBox from "../containers/RestaurantBox";
import Booking from "./Booking";

class TableLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      backgroundcolor: ''
    }
  }
  onChange(inputEntry) {
    if (inputEntry) {
      this.setState({inputValue: inputEntry, backgroundcolor: '#FF0000'}) // here I want to change the color to red
    } else {
      this.setState({inputValue: inputEntry, backgroundcolor: ''}) // leave empty for default
    }
  }

    render(){
      const { backgroundcolor } = this.state
        const bookingNodes = this.props.data.map(booking => {
            return (
              <Booking key={booking.id} duration={booking.duration} date={booking.date} time={booking.time} partySize={booking.partySize} tableId={booking.tableId}></Booking>
            );
          });

        return (
            <div className="wrapper">

                <div className="table1" style={{backgroundColor: backgroundcolor}}><input
                  value={this.state.inputValue}
                  onChange={(evt) => this.onChange(evt.target.value)}
                 /><strong>Table 1</strong>{bookingNodes}</div>

                <div className="table2"><strong>Table 2</strong>{bookingNodes}</div>

                <div className="table3"><strong>Table 3</strong>{bookingNodes}</div>

                <div className="table4"><strong>Table 4</strong>{bookingNodes}</div>

                <div className="table5"><strong>Table 5</strong>{bookingNodes}</div>
            </div>
             )
        }
}

export default TableLayout
