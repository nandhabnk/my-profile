import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

const authenticationSlice = createSlice({
  name: "authenticationSlice",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = action.payload;
    },
    logout(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const authActions = authenticationSlice.actions;
export default authenticationSlice.reducer;
