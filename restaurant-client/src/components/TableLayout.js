import React, { Component } from 'react';
import "./TableLayout.css";
import RestaurantBox from "../containers/RestaurantBox";
import Booking from "./Booking";

class TableLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: '#8EE4AF',
      bgColor2: '#8EE4AF',
      bgColor3: '#8EE4AF',
      bgColor4: '#8EE4AF',
      bgColor5: '#8EE4AF'
    }
  }

  boxClick = (e) => {
    if (this.state.bgColor === '#8EE4AF') {
      this.setState({ bgColor: '#FC4445' })
    } else {
      this.setState({ bgColor: '#8EE4AF' })
    }
  }

  boxClick2 = (e) => {
    if (this.state.bgColor2 === '#8EE4AF') {
      this.setState({ bgColor2: '#FC4445' })
    }
    else {
      this.setState({ bgColor2: '#8EE4AF' })
    }
  }

  boxClick3 = (e) => {
    if (this.state.bgColor3 === '#8EE4AF') {
      this.setState({ bgColor3: '#FC4445' })
    }
    else {
      this.setState({ bgColor3: '#8EE4AF' })
    }
  }

  boxClick4 = (e) => {
    if (this.state.bgColor4 === '#8EE4AF') {
      this.setState({ bgColor4: '#FC4445' })
    }
    else {
      this.setState({ bgColor4: '#8EE4AF' })
    }
  }

  boxClick5 = (e) => {
    if (this.state.bgColor5 === '#8EE4AF') {
      this.setState({ bgColor5: '#FC4445' })
    }
    else {
      this.setState({ bgColor5: '#8EE4AF' })
    }
  }

  render() {
    const bookingNodes = this.props.data.map(booking => {
      return (
        <Booking
          key={booking.id}
          duration={booking.duration}
          date={booking.date} time={booking.time}
          partySize={booking.partySize}
          tableId={booking.tableId} />
      );
    });

    return (
      <div className="wrapper">
        <div
          className="table1"
          style={{ backgroundColor: this.state.bgColor }}
          onClick={this.boxClick}>
          <span className="tableHead">
            Table 1
                </span>
          {JSON.stringify(this.props.tableData[0]["_embedded"].bookings)}
        </div>

        <Table data={this.tableData[0]} />
        <Table data={this.tableData[1]} />
        <Table data={this.tableData[2]} />
        <Table data={this.tableData[3]} />

        <div className="table2"
          style={{ backgroundColor: this.state.bgColor2 }}
          onClick={this.boxClick2}>
            <span className="tableHead">
              Table 2
            </span>{bookingNodes}
        </div>

        <div className="table3"
          style={{ backgroundColor: this.state.bgColor3 }}
          onClick={this.boxClick3}><span className="tableHead">Table 3</span>{bookingNodes}</div>

        <div className="table4"
          style={{ backgroundColor: this.state.bgColor4 }}
          onClick={this.boxClick4}><span className="tableHead">Table 4</span>{bookingNodes}</div>

        <div className="table5"
          style={{ backgroundColor: this.state.bgColor5 }}
          onClick={this.boxClick5}><span className="tableHead">Table 5</span>{bookingNodes}</div>

      </div>
    )
  }
}

export default TableLayout
