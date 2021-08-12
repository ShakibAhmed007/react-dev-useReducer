import React, { useReducer } from 'react';

const initialState = {
  counter: 0,
  counter1: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.value };
    case 'decrement':
      return { ...state, counter: state.counter - action.value };
    case 'increment1':
      return { ...state, counter1: state.counter1 + action.value };
    case 'decrement1':
      return { ...state, counter1: state.counter1 - action.value };
    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  let value = 0;
  return (
    <div>
      <h2> Counter Value is == {count.counter}</h2>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'increment',
            value: 1
          })
        }
      >
        Increment by 1
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'increment',
            value: 5
          })
        }
      >
        Increment by 5
      </button>
      <br />
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'decrement',
            value: 1
          })
        }
      >
        Decrement by 1
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'decrement',
            value: 5
          })
        }
      >
        Decrement by 5
      </button>

      <h2> Counter1 Value is == {count.counter1}</h2>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'increment1',
            value: 1
          })
        }
      >
        Increment by 1
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'increment1',
            value: 5
          })
        }
      >
        Increment by 5
      </button>
      <br />
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'decrement1',
            value: 1
          })
        }
      >
        Decrement by 1
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'decrement1',
            value: 5
          })
        }
      >
        Decrement by 5
      </button>
    </div>
  );
};

export default ComplexCounter;
