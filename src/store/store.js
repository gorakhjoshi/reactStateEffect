import { createStore } from 'redux';

function counterReducer(state = { counter: 35 }, action) {
  return state;
}

const store = createStore(counterReducer);

export default store;
