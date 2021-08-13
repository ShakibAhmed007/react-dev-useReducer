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
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        dispatch({type: 'Success', data: json});
      })
      .catch(error => {
        dispatch({type: 'Error', data: json});
      });
  }, []);
};

export default Post2;
