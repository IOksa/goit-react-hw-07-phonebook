import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    value: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setContactsFilter(state, action) {
        state.value = action.payload;
      },
    },
  });
  
export const {setContactsFilter}=filterSlice.actions;
export const filterReducer=filterSlice.reducer;

