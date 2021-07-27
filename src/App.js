import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/appointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  };

  const createContact = (name, phone, email) => {
    setContacts((prev) => [
      ...prev,
      {
        name,
        phone,
        email,
      },
    ]);
  };

  const createAppointment = (title, contact, date, time) => {
    setAppointments((prev) => [
      ...prev,
      {
        title,
        contact,
        date,
        time,
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} createContact={createContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              createAppointment={createAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
