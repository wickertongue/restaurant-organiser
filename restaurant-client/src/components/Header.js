import React, { Component } from 'react';
import Calendar from "./Calendar"
import "./Header.css"

class Header extends Component {

    render() {
        

        return (
            <div>
            <div> 
                <h1>Welcome to The Cohort<br />
                    <span className ="subHead">Fine Dining in Edinburgh</span>
                    <img src={require("./restuarant.jpg")}/>
                </h1> 
                <div className="calendar">
                        <Calendar selectedDate={this.props.selectedDate}/> 
                </div>
            </div>
            
            </div>
        );
    }
}

export default Header;