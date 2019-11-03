import React, { Component } from 'react'; 
import "./TableLayout.css";

class TableLayout extends Component {

    render(){
        return (
            <div className="wrapper">
                <div className="table1">Table 1</div>
                <div className="table2">Table 2</div>
                <div className="table3">Table 3</div>
            </div>
        )
    }

}

export default TableLayout
