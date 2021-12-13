import { createStore } from 'redux';

const initialState = { counter: 0, displayCounter: true};

// Reducer implementation using native Redux
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + action.amount,
            displayCounter: state.displayCounter
        };
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            displayCounter: state.displayCounter
        };
    } else if (action.type === 'toggleVisibility') {
        return {
            counter: state.counter,
            displayCounter: !state.displayCounter
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;
