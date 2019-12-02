import React, { Component } from 'react';
import Table from './Table';
import './TableLayout.css'

function TableLayout(props) {
      return (
      <div className="tables">
        {props.tableData.map(table =>
          <Table
            tableData={table}
            selectedDate={props.selectedDate}
            key={table.id} />
        )
        }
        {props.tableData.forEach(table => {
          if (!table._embedded) {
            console.log(table.id, "No Booking")
          } else {
            console.log(table.id, table._embedded.bookings)
          }
        })
        }
      </div>
    )
}

export default TableLayout;
