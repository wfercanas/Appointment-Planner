import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  contact,
  date,
  time,
  handleSubmit,
  handleChange,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        value={title}
        onChange={handleChange}
        required
      />
      <ContactPicker contacts={contacts} handleChange={handleChange} />
      <input
        name="date"
        type="date"
        value={date}
        onChange={handleChange}
        min={getTodayString()}
        required
      />
      <input
        name="time"
        type="time"
        value={time}
        onChange={handleChange}
        required
      />
      <button type="submit">Create appointment</button>
    </form>
  );
};
