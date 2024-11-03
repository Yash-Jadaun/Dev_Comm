import React from 'react';

const PostCard = ({ title, content, author }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <small>Posted by {author}</small>
    </div>
  );
};

export default PostCard;
