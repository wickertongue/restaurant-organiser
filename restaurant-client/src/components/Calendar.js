// import React, { Component } from 'react'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import { registerLocale, setDefaultLocale } from "react-datepicker";
// import es from 'date-fns/locale/es';
// registerLocale('es', es);

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// class Calendar extends React.Component {
//   state = {
//     startDate: new Date()
//   };

//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };

//   render() {
//     return (
//       <DatePicker
//         selected={this.state.startDate}
//         onChange={this.handleChange}
//         dateFormat="dd/MM/yyyy"
//       />
//     );
//   }
// }
// export default Calendar;

import React, { Component } from "react";


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value })
  }


  onSubmit(event) {
    console.log(event)
    event.preventDefault(event);
    const date = this.state.date.trim();
    if (!date) {
      return
    }
    this.props.handleSubmit({ date: date});
    this.setState({ date: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        
        <input
          type="date"
          placeholder="Date"
          value={this.state.date}
          onChange={this.handleDateChange}
        />
      </form>
    )
  }
}

export default Calendar;
