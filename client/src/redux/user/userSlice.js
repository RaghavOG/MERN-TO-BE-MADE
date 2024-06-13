import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,  // current authenticated user 
  error: null,      // error message
  loading: false,  // loading state
};

const userSlice = createSlice({ // createSlice() function takes an object as an argument
  name: 'user',  // name of the slice
  initialState,  // initial state is an object with currentUser, error, and loading properties
  reducers: { // reducers object contains all the reducer functions
    signUpStart: (state) => { // signInStart is when the sign-in process starts
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state, action) => {    // signInSuccess is when the sign-in process is successful
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signUpFailure: (state, action) => {   // signInFailure is when the sign-in process fails
      state.loading = false;
      state.error = action.payload;
    },
    signInStart: (state) => { // signInStart is when the sign-in process starts
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {    // signInSuccess is when the sign-in process is successful
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {   // signInFailure is when the sign-in process fails
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {  // updateStart is when the user update process starts
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => { // updateSuccess is when the user update process is successful
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => { // updateFailure is when the user update process fails
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => { // deleteUserStart is when the user delete process starts
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => { // deleteUserSuccess is when the user delete process is successful
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => { // deleteUserFailure is when the user delete process fails
      state.loading = false; 
      state.error = action.payload;
    },
    signoutSuccess: (state) => { // signoutSuccess is when the user sign-out process is successful
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;
