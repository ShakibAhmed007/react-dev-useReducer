import React, { useState, useEffect, useReducer } from 'react';
const initialState = {
  loading: false,
  error: '',
  posts: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Success':
      return {
        loading: false,
        error: '',
        posts: action.data
      };

    case 'Error':
      return {
        loading: false,
        error: 'Error Occured',
        posts: {}
      };
    default:
      return state;
  }
};
const Post2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'Success', data: json });
      })
      .catch(error => {
        dispatch({ type: 'Error' });
      });
  }, []);

  return (
    <div>
      <p>{state.loading ? 'Loading ......' : state.posts.title}</p>
      <p>{state.error ? state.error : ''}</p>
    </div>
  );
};

export default Post2;
