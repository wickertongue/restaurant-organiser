import React, { Component } from 'react';
import "./TableLayout.css";
import RestaurantBox from "../containers/RestaurantBox";
import Booking from "./Booking";

class TableLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bgColor: '#4eca4e',
      bgColor2: '#4eca4e',
      bgColor3: '#4eca4e',
      bgColor4: '#4eca4e',
      bgColor5: '#4eca4e'
    }
  }

  boxClick = (e) => {
    if(({bgColor: '#4eca4e'}))
      this.setState({bgColor: 'red'});
    else
      this.setState({bgColor: '#4eca4e'})
    }


    boxClick2 = (e) => {
        this.setState({
          bgColor2: "red",
        })
      }

      boxClick3 = (e) => {
          this.setState({
            bgColor3: "red",
          })
        }

        boxClick4 = (e) => {
            this.setState({
              bgColor4: "red",
            })
          }

          boxClick5 = (e) => {
              this.setState({
                bgColor5: "red",
              })
            }


    render(){

        const bookingNodes = this.props.data.map(booking => {
            return (
              <Booking key={booking.id} duration={booking.duration} date={booking.date} time={booking.time} partySize={booking.partySize} tableId={booking.tableId}></Booking>
            );
          });

        return (


            <div className="wrapper">

         <div className="table1"
         style={{backgroundColor: this.state.bgColor}}
          onClick={this.boxClick}><span className = "tableHead">Table 1</span>{bookingNodes}</div>

          <div className="table2"
          style={{backgroundColor: this.state.bgColor2}}
           onClick={this.boxClick2}><span className = "tableHead">Table 2</span>{bookingNodes}</div>

           <div className="table3"
           style={{backgroundColor: this.state.bgColor3}}
            onClick={this.boxClick3}><span className = "tableHead">Table 3</span>{bookingNodes}</div>

            <div className="table4"
            style={{backgroundColor: this.state.bgColor4}}
             onClick={this.boxClick4}><span className = "tableHead">Table 4</span>{bookingNodes}</div>

             <div className="table5"
             style={{backgroundColor: this.state.bgColor5}}
              onClick={this.boxClick5}><span className = "tableHead">Table 5</span>{bookingNodes}</div>

            </div>
             )
        }
}

export default TableLayout
