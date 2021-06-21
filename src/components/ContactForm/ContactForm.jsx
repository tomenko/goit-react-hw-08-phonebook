import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact, getItems } from '../../redux/contacts';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: '',
    number: '',
  };
    
  loginInputNameId = nanoid(); 
  loginInputNamberId = nanoid(); 
  
  hendleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const addInputValue = contact =>
      contact.name === this.state.name || contact.number === this.state.number;

    if (this.props.items.some(addInputValue)) {
      alert(`Contact is already in contacts`);
      return;
    }

    this.props.onSubmit({...this.state})
    this.reset()
  };
    
  reset = () => {
    this.setState({ name: '', number: '' })
  };
  
  render() {
    const { name, number } = this.state;
      
    return (
      <section className="sectionFormContacts">
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor={this.loginInputNameId}>Name</label>
          
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id = {this.loginInputNameId}
            value={name}
            onChange = {this.hendleInputChange}
                
          />
        

          <label htmlFor={this.loginInputNamberId}>Number</label>
          
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id = {this.loginInputNamberId}
            value={number}
            onChange = {this.hendleInputChange}
          />
        
                  
          <button type="submit" className="btn btnForm">Add contact</button>
        </form>
      </section>

    )
  }
}

const mapStateToProps = state => ({
  items: getItems(state),
});

const mapDispatchFromProps = dispatch => ({
  onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchFromProps)(ContactForm);
