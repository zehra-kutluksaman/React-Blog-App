
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../BlogPost.css';

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="blog-post-detail">
        <p>Yazı bulunamadı.</p>
        <Link to="/">Geri Dön</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/" className="back-link">Geri Dön</Link>
    </div>
  );
};

export default BlogPost;
