import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const contactsInitialState={
//     contacts:[ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ]
// }

const contactsInitialState={contacts:[]};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers:{
        addContact: {
            reducer(state, action) {
              state.contacts.push(action.payload);
            },
            prepare(newContact) {
              return {
                payload: {
                  id: nanoid(),
                  ...newContact,
                },
              };
            }
          },
        deleteContact(state, action) {
        const index = state.contacts.findIndex(contact => contact.id === action.payload);
        state.contacts.splice(index, 1);
        },
    }
});

////for localeStorage//////////////////////////////////////////////////////////////
const persistConfig = {
    key: 'contacts',
    storage,

  };
  
////////////////////////////////////////////////////////////////////////////////////

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
