import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: "https://64de34cb825d19d9bfb249b3.mockapi.io/",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) =>{
    try {
      const response = await instanceContacts.get("/contacts");
      return response.data;
    }catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (receivedAddContact, thunkAPI) => {
    try{
      const response = await instanceContacts.post("/contacts", receivedAddContact);
      return response.data;
    }catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI)=> {
    try {
      const response = await instanceContacts.delete(`/contacts/${id}`);
      return response.data;
    }catch (event){
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);