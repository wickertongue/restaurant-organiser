import React, { Component } from 'react';
import "./TableLayout.css";
import RestaurantBox from "../containers/RestaurantBox";
import Booking from "./Booking";

class TableLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // inputValue: '',
      // backgroundcolor: ''
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

                <div className="table1" style={{backgroundColor: backgroundcolor}}>
                <span className = "tableHead">Table 1</span>{bookingNodes}<input
                  value={this.state.inputValue}
                  onChange={(evt) => this.onChange(evt.target.value)}
                 /></div>

                <div className="table2"><span className = "tableHead">Table 2</span>{bookingNodes}</div>

                <div className="table3"><span className = "tableHead">Table 3</span>{bookingNodes}</div>

                <div className="table4"><span className = "tableHead">Table 4</span>{bookingNodes}</div>

                <div className="table5"><span className = "tableHead">Table 5</span>{bookingNodes}</div>
            </div>
             )
        }
}

export default TableLayout
