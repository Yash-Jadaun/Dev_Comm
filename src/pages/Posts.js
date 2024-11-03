import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend
    axios.get('/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <PostCard
          key={post._id}
          title={post.title}
          content={post.content}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default Posts;
