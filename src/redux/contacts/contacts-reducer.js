import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactSuccess,
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

