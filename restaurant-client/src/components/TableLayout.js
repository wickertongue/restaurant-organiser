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
      <div class="tables">
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
