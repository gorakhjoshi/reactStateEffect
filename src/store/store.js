import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {}

const store = createStore(counterReducer);

export default store;
