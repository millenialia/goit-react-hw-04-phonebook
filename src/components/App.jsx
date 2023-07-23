import { useState, useEffect, useMemo, useRef } from 'react'

import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

export const App = () =>  {

  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  const inputRef = useRef();


  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('contacts')) || [])
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const filteredContacts = useMemo(
    () => contacts.filter(contact => contact.contactName.toLowerCase().includes(filter.toLowerCase())),
    [contacts, filter]
  );

  const addContact = (contactName, contactNumber, contactId) => {
  if (checkName(contactName)) {
    const newContact = { contactName, contactNumber, contactId }
    setContacts(prevState =>
      [...prevState, newContact]
    )
    }
  }

  const checkName = (name) => {
    if (contacts.find(contact => contact.contactName === name
    )) {
      alert(`${name}is already in contacts`);
      return false;
    }
    return true;
  }

  const handleChange = () => {
    setFilter(inputRef.current.value)
  }


  const deleteContact = ({ target }) => {
    setContacts(contacts.filter((contact) => contact.contactId !== target.id))
  }

    return (
      <div className='phonebookBlock'>
        <h1>Phonebook</h1>
        <ContactForm
          addContact = {addContact} />

        <h2>Contacts</h2>
        <Filter
          inputRef = {inputRef}
          filter={filter}
          handleChange={handleChange } />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={deleteContact} />
      </div>
    );

};
