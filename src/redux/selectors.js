import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);