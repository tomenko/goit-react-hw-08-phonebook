import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;

export const getFilterValue = state => state.contacts.filter;

export const getLoadingItems = state => state.contacts.loading;

export const getFilteredContactList = createSelector(
  [getItems, getFilterValue],
  (allContacts, filter) => {
    const regExp = new RegExp(filter, 'gi');

    if (filter) {
    return allContacts.filter(contact => regExp.test(contact.name));
    }
    return allContacts;
  },
);
