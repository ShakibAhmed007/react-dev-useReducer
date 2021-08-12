import React from 'react';

const ComponentB = () => {
  return (
    <div>
      <h2> Value is == </h2>
      <button type="button" onClick={() => dispatch('increment')}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch('decrement')}>
        Decrement
      </button>
    </div>
  );
};

export default ComponentB;
