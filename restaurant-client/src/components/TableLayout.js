import React, { Component } from 'react'; 
import "./TableLayout.css";
import RestaurantBox from "../containers/RestaurantBox";

class TableLayout extends Component {


    render(){
        // const bookingNodes = this.props.data.map(booking => {
        //     return (
        //       <Booking key={booking.id} name={booking.name} date={booking.date} time={booking.time} partySize={booking.partySize} tableId={booking.tableId}></Booking>
        //     );
        //   });

        return (
            <div className="wrapper">
                <div className="table1">Table 1 </div>
                <div className="table2">Table 2</div>
                <div className="table3">Table 3</div>
            </div>
        )
    }

}

export default TableLayout
