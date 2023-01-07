import React, { Component } from 'react';
import { Forma } from './Forma/Forma';
import { Container } from './App.styled';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    let newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  handlDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  handlChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  handlFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  componentDidMount() {
    // CONTACTS_KEY =

    const contacts = localStorage.getItem('contacts');
    const parsedId = JSON.parse(contacts);

    if (parsedId) {
      this.setState({ contacts: parsedId });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextId = this.state.contacts;
    const prevId = prevState.contacts;
    if (nextId !== prevId) {
      localStorage.setItem('contacts', JSON.stringify(nextId));
    }
  }

  render() {
    const { filter } = this.state;

    const contactsFilter = this.handlFilterContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <Forma onSubmit={this.handlFormSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handlChangeFilter} />
        <Contact contacts={contactsFilter} onClick={this.handlDeleteContact} />
      </Container>
    );
  }
}
