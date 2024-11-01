import { configureStore, createReducer } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: createReducer,
  },
});

export default store;
