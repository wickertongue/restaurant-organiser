import React, { Component } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calendar extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        dateFormat="dd/MM/yyyy"
      />
    );
  }
}
export default Calendar;
