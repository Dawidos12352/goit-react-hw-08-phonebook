import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, delContact } from './operations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
};


export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    error: null,
    isLoading: false,
    filter: "",
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {

      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {

      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [addContact.rejected]: handleRejected,
    [delContact.pending]: handlePending,
    [delContact.fulfilled](state, action) {

      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [delContact.rejected]: handleRejected,
   
  },
});

export const contactsReducer = contactsSlice.reducer;
