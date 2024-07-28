import React, { Component } from 'react';
import axios from 'axios';

class Booking extends Component {
  state = {
    date: '',
    time: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/book', this.state, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Appointment booked successfully');
    } catch (error) {
      alert('Booking failed');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="date"
          name="date"
          onChange={this.handleChange}
        />
        <input
          type="time"
          name="time"
          onChange={this.handleChange}
        />
        <button type="submit">Book Appointment</button>
      </form>
    );
  }
}

export default Booking;
