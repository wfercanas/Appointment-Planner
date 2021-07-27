import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({
  contacts,
  appointments,
  createAppointment,
}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChange = (e) => {
    const setters = {
      title: setTitle,
      contact: setContact,
      date: setDate,
      time: setTime,
    };

    const stateToChange = e.target.name;
    setters[stateToChange](e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAppointment(title, contact, date, time);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contact={contact}
          contacts={contacts}
          date={date}
          time={time}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />
      </section>
    </div>
  );
};
