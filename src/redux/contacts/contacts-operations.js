import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,    
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest);

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const addContact = ({ name, number }) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactID => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactID}`)
    .then(() => dispatch(deleteContactSuccess(contactID)))
    .catch(error => dispatch(deleteContactError(error)));
};
