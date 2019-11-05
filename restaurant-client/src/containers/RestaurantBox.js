import React, {Component} from "react";
import BookingList from "../components/BookingList";
import BookingForm from "../components/BookingForm";
import TableLayout from "../components/TableLayout";
import ColorChange from "../components/ColorChange";

class RestaurantBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      tables: [],
      bookings: [],
      isLoading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {

    // customer fetch
    const customersFetch = await fetch("http://localhost:8080/customers")
    const customers = await customersFetch.json();
    this.setState({
      customers: customers["_embedded"].customers,
    });

    // booking fetch
    const bookingFetch = await fetch("http://localhost:8080/bookings")
    const bookings = await bookingFetch.json();
    this.setState({
      bookings: bookings["_embedded"].bookings,
    });

    // table fetch
    const tableFetch = await fetch("http://localhost:8080/dinnerTables")
    const tables = await tableFetch.json();
    this.setState({
      tables: tables["_embedded"].dinnerTables,
    });

    this.setState({ isLoading: false})
  }

    handleSubmit(formData) {
      const customerData = null;
      const bookingData = null;
      console.log(formData)
      // console.log(formData.refs)
      // console.log(this.refs.name)

      fetch("http://localhost:8080/customers", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }) 
        .then(res => res.json())
        .then(customer => {

          fetch("http://localhost:8080/bookings", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              time: formData.time,
              date: formData.date,
              partySize: formData.partySize,
              duration: 120,
              customer: 'http://localhost:8080/customers/' + customer.id,
            })

            // fetch
          })
            .then(res => res.json())
            .then(booking => {
              console.log('booking', booking)
            })
            // catch
        })
        // catch
    };


  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="booking-list">
        <h1>Welcome to the Cohort<br /><span className ="subHead">Fine Dining in Edinburgh</span></h1>
        <TableLayout data={this.state.bookings}/>
        {/* <BookingList data={this.state.bookings}/> */}
        <BookingForm
        handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default RestaurantBox;
