import React, { Component } from 'react';
import Table from './Table';
import './TableLayout.css'

class TableLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="tables">
        {this.props.tableData.map(table =>
          <Table
            tableData={table}
            selectedDate={this.props.selectedDate}
            key={table.id} />
        )
        }
        {this.props.tableData.forEach(table => {
          if (!table._embedded) {
            console.log(table.id, "No Booking")
          } else {
            console.log(table.id, table._embedded.bookings)
          }
        }
        )
        }

      </div>
    )
  }
}

export default TableLayout;
