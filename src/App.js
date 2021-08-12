import React from 'react';
import './style.css';
import Counter from './Counter';
import ComplexCounter from './ComplexCounter';

export default function App() {
  return (
    <div>
      <h1>useReducer !!!</h1>
      <Counter />
      <hr />
      <ComplexCounter />
    </div>
  );
}
