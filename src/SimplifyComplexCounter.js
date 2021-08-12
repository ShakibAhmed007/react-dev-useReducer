import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const SimplifyComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count1, dispatch1] = useReducer(reducer, initialState);

  let value = 0;
  return (
    <div>
      <h2> Counter Value is == {count}</h2>
      <button type="button" onClick={() => dispatch('increment')}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch('decrement')}>
        Decrement
      </button>

      <hr />

      <h2> Counter1 Value is == {count1}</h2>
      <button type="button" onClick={() => dispatch1('increment')}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch1('decrement')}>
        Decrement
      </button>
    </div>
  );
};

export default SimplifyComplexCounter;
