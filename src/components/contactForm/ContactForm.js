import React from 'react';

export const ContactForm = ({
  name,
  phone,
  email,
  handleChange,
  handleSubmit,
  duplicatedName,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <p style={{ color: 'red', fontSize: 10 }}>
        {duplicatedName ? 'This name already exists as contact' : ''}
      </p>
      <input
        type="text"
        name="currentName"
        placeholder="Insert new contact name"
        value={name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="currentPhone"
        placeholder="Insert new contact cellphone number (10 digits)"
        maxLength="10"
        pattern="[0-9]{10}"
        value={phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="currentEmail"
        placeholder="Insert new contact email"
        value={email}
        onChange={handleChange}
        required
      />
      <button type="submit">Create contact</button>
    </form>
  );
};
