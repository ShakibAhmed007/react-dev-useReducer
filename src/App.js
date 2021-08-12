import React, { useReducer } from 'react';
import './style.css';
import Counter from './Counter';
import ComplexCounter from './ComplexCounter';
import SimplifyComplexCounter from './SimplifyComplexCounter';

import ComponentA from './ComponentA';

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
const counterContext = React.createContext();

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer !!!</h1>
      <Counter />
      <hr />
      <ComplexCounter />
      <hr />
      <SimplifyComplexCounter />
      <hr />
      <h3>pass reducer state to leaf node component , (global state )</h3>
      <counterContext.Provider
        value={{ countValue: count, countDispatch: dispatch }}
      >
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}
