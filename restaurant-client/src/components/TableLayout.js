import React, { Component } from 'react'; 
import "./TableLayout.css";
import RestaurantBox from "../containers/RestaurantBox";
import Booking from "./Booking"

class TableLayout extends Component {


     render(){
        const bookingNodes = this.props.data.map(booking => {
            return (
              <Booking 
                key={booking.id} 
                name={booking.name} 
                date={booking.date} 
                time={booking.time} 
                partySize={booking.partySize} 
                tableId={booking.tableId} 
              />
            );
          });
          
        return (
            <div className="wrapper">
                <div className="table1">{bookingNodes}</div>
                <div className="table2">{bookingNodes}</div>
                <div className="table3">Table 3</div>
                <div className="table4">Table 4</div>
                <div className="table5">Table 5</div>
            </div>
            
             )
    }

}

export default TableLayout
