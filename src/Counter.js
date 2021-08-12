import React from 'react';

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
