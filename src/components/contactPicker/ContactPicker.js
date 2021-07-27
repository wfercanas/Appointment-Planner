import React from 'react';

export const ContactPicker = ({ contacts, handleChange }) => {
  return (
    <select onChange={handleChange} name="contact" required>
      <option key="unselected" value="">
        No contact selected
      </option>
      {contacts.map((contact) => {
        return (
          <option key={contacts.indexOf(contact)} value={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
