import { createSlice } from "@reduxjs/toolkit";

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import {fetchContacts, addContact, deleteContact} from './operations';

// const contactsInitialState={
//     contacts:[ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ]
// }

//const contactsInitialState={contacts:[]};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action)=>{
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};

const handleAddContactFulfilled=(state, action)=>{
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action)=>{
  state.isLoading = false;
  state.error = null;
  const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
  state.contacts.splice(index, 1);
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
      contacts:[],
      isLoading: false,
      error: null,
    },
    // reducers:{
    //     addContact: {
    //         reducer(state, action) {
    //           state.contacts.push(action.payload);
    //         },
    //         prepare(newContact) {
    //           return {
    //             payload: {
    //               id: nanoid(),
    //               ...newContact,
    //             },
    //           };
    //         }
    //       },
    //     deleteContact(state, action) {
    //     const index = state.contacts.findIndex(contact => contact.id === action.payload);
    //     state.contacts.splice(index, 1);
    //     },
    extraReducers: {
      [fetchContacts.pending]: handlePending,
      [fetchContacts.fulfilled]: handleFulfilled,
      [fetchContacts.rejected]: handleRejected,
      [addContact.pending]: handlePending,
      [addContact.fulfilled]: handleAddContactFulfilled,
      [addContact.rejected]: handleRejected,
      [deleteContact.pending]: handlePending,
      [deleteContact.fulfilled]: handleDeleteContactFulfilled,
      [deleteContact.rejected]: handleRejected,
    },
  
});

////for localeStorage//////////////////////////////////////////////////////////////
// const persistConfig = {
//     key: 'contacts',
//     storage,

//   };
  
////////////////////////////////////////////////////////////////////////////////////

// export const {addContact, deleteContact} = contactsSlice.actions;
// export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const contactsReducer = contactsSlice.reducer;