import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./counter";
import authSlice from "./auth";

const storeToolkit = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export default storeToolkit;
