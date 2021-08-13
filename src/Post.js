import React, { useState, useEffect } from 'react';

const Post = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setError('');
        setPosts(json);
      })
      .catch(error => {
        setError('Error Occured');
        setLoading(false);
        setPosts({});
      });
  }, []);

  return (
    <div>
      <p>{loading ? 'Loading ......' : posts.title}</p>
      <p>{error ? error : ''}</p>
    </div>
  );
};

export default Post;
