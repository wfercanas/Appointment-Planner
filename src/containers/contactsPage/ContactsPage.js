import React, { useEffect, useState } from 'react';

export const ContactsPage = ({ contacts, createContact }) => {
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

  const [duplicatedName, setDuplicatedName] = useState(false);
  useEffect(() => {
    setDuplicatedName(contacts.some((contact) => contact.name === currentName));
  }, [currentName, contacts]);

  const handleChange = (e) => {
    const setters = {
      currentName: setCurrentName,
      currentPhone: setCurrentPhone,
      currentEmail: setCurrentEmail,
    };

    const stateToChange = e.target.name;
    setters[stateToChange](e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duplicatedName) {
      return;
    } else {
      createContact(currentName, currentPhone, currentEmail);
    }

    setCurrentName('');
    setCurrentPhone('');
    setCurrentEmail('');
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <p style={{ color: 'red', fontSize: 10 }}>
            {duplicatedName ? 'This name already exists as contact' : ''}
          </p>
          <input
            type="text"
            name="currentName"
            placeholder="Insert new contact name"
            value={currentName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="currentPhone"
            placeholder="Insert new contact cellphone number (10 digits)"
            maxLength="10"
            pattern="[0-9]{10}"
            value={currentPhone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="currentEmail"
            placeholder="Insert new contact email"
            value={currentEmail}
            onChange={handleChange}
            required
          />
          <button type="submit">Create contact</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
