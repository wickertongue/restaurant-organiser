import React, { Component } from "react";

class ColorChange extends Component{
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      backgroundcolor: ''
    }
  }
  onChange(inputEntry) {
    if (inputEntry) {
      this.setState({inputValue: inputEntry, backgroundcolor: '#FF0000'}) // here I want to change the color to red
    } else {
      this.setState({inputValue: inputEntry, backgroundcolor: ''}) // leave empty for default
    }
  }

  render(){
    const { backgroundcolor } = this.state

    return (
     <div>
        <input
          value={this.state.inputValue}
          onChange={(evt) => this.onChange(evt.target.value)}
         />
         <div style={{backgroundColor: backgroundcolor}}>
          <h1>Change Table Color</h1>
         </div>
     </div>
    );
  }
}

export default ColorChange
