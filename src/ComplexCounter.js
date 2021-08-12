import React, { useReducer } from 'react';

const initialState = {
  counter: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return { counter: state.counter };
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  let value = 0;
  return (
    <div>
      <h2> Value is == {count.counter}</h2>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'increment'
          })
        }
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'decrement'
          })
        }
      >
        Decrement
      </button>
    </div>
  );
};

export default ComplexCounter;
