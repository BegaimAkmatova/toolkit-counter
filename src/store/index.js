import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./auth";
import counterSlice from "./counter";

const store = configureStore({
    reducer: {
        counter:counterSlice.reducer,
        auth: authenticationSlice.reducer,
        // login: loginSlice.reducer
    }
});

export const authActions = authenticationSlice.actions
export const counterActions = counterSlice.actions;
export default store;