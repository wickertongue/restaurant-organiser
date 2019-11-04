import React, {Component} from 'react';
import Customers from './components/Customers';

class App extends Component {
//State stores output from API request
  state = {
    customers: [],
    isLoading: true
  };

async componentDidMount() {
  const response = await fetch("http://localhost:8080/customers")

  const data = await response.json();

  this.setState({ 
    customers: data["_embedded"].customers,  
  isLoading: false });
}

  render () {
    const {customers, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
        <div>
        <h1>Customers Data in App.js</h1>
        <p>
          {this.state.customers[1].name}</p>


        </div>
    )
  }
}

export default App;
