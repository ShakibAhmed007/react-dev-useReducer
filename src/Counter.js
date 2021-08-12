import React from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state + 1;
    default:
      return state;
  }
};

const Counter = () => {
  let value = 0;
  return (
    <div>
      <h4> Value is {value}</h4>
      <button type="button"> Increment</button>
      <button type="button"> Decrement</button>
    </div>
  );
};

export default Counter;
