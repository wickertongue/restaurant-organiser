import React, { Component } from 'react';
import "./TableLayout.css";
import Table from './Table';

class TableLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.tableData.map(table => 
          <Table 
            tableData={table} 
            key={table.id} />
         
         
         
            // {/* { 
            // table["_embedded"].bookings.map(booking => 
            //   <p>{booking.date}</p> )
            // }
            // </Table> */}
        )
        }
      </div>
    )
  }
}

export default TableLayout;
