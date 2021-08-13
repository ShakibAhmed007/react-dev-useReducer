import React, { useState, useEffect } from 'react';
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
const Post2 = () => {};

export default Post2;
