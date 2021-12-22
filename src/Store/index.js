import { configureStore } from "@reduxjs/toolkit";
import AuthReducers from "./authentication-slice";

const store = configureStore({ reducer: AuthReducers });

export default store;
