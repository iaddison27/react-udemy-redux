import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, displayCounter: true };

// Reducer implementation using Redux Toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        // Only pass in actions if you need a parameter from it
        increment(state, actions) {
            // can mutate the state when using react toolkit as it prevents you from mutating the initial state (it automatically clones it)
            state.counter += actions.payload.amount;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.displayCounter = !state.displayCounter;
        },
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice;
