import React, { Component } from 'react';
import { FormContainer, FormLabel, FormInput, Button } from './Forma.styled';

import PropTypes from 'prop-types';

export class Forma extends Component {
  state = {
    name: '',
    number: '',
  };
  // addContact = text => {};
  handlInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <FormLabel onSubmit={this.handleSubmit}>
          Name
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            value={this.state.number}
            onChange={this.handlInput}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <Button type="submit"> Add contact</Button>
      </FormContainer>
    );
  }
}

Forma.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
