import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

// Selectors

export const getContacts = state => state.contacts;
