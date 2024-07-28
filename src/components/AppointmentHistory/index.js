import React, { Component } from 'react';
import axios from 'axios';

class AppointmentHistory extends Component {
  state = {
    appointments: []
  };

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/appointments', {
        headers: { Authorization: `Bearer ${token}` }
      });
      this.setState({ appointments: response.data });
    } catch (error) {
      alert('Failed to fetch appointments');
    }
  }

  render() {
    return (
      <div>
        <h2>Appointment History</h2>
        <ul>
          {this.state.appointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.date} at {appointment.time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppointmentHistory;
