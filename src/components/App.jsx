import { Component } from 'react'

import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

export class App extends Component  {

  state = {
    contacts: [
    {contactId: 'id-1', contactName: 'Rosie Simpson', contactNumber: '459-12-56'},
    {contactId: 'id-2', contactName: 'Hermione Kline', contactNumber: '443-89-12'},
    {contactId: 'id-3', contactName: 'Eden Clements', contactNumber: '645-17-79'},
    {contactId: 'id-4', contactName: 'Annie Copeland', contactNumber: '227-91-26'},
  ],
  filter: '',
}


  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    });
  }

  componentDidUpdate = () => {
    this.saveContacts();
  };

    saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

    addContact = (contactName, contactNumber, contactId) => {
    if (this.checkName(contactName)) {
      this.state.contacts.push({ contactName, contactNumber,contactId });
    this.setState((prevState) =>({
      contacts: prevState.contacts,
    }))
    }
  }

  checkName = (name) => {
    if (this.state.contacts.find(contact => contact.contactName === name
    )) {
      alert(`${name}is already in contacts`);
      return false;
    }
    return true;
  }

  handleChange = ({target}) => {
    this.setState({
      filter: target.value
    })
  }

  filterContacts = (contacts) => {
    return contacts.filter(contact => contact.contactName.toLowerCase().includes(this.state.filter.toLowerCase()))
  }

  deleteContact = ({ target }) => {
    this.setState((prevState) => ({

        contacts: prevState.contacts.filter((contact) => contact.contactId !== target.id)

    }))
  }

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.filterContacts(contacts)

    return (
      <div className='phonebookBlock'>
        <h1>Phonebook</h1>
        <ContactForm
          addContact = {this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleChange={ this.handleChange } />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={ this.deleteContact} />
      </div>
    );
  }
};
