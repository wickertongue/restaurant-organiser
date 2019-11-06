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
            selectedDate={this.props.selectedDate} 
            key={table.id} />
        )
        }
      </div>
    )
  }
}

export default TableLayout;
