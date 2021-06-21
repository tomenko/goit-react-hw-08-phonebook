import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;

export const getFilterValue = state => state.contacts.filter;

export const getLoadingItems = state => state.contacts.loading;

export const getFilteredContactList = createSelector(
  [getItems, getFilterValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts
      .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
      .sort((a, b) => a.name.localeCompare(b.name));
  },
);
