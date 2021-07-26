import React, { useEffect, useState } from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

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
        <ContactForm
          name={currentName}
          phone={currentPhone}
          email={currentEmail}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          duplicatedName={duplicatedName}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
