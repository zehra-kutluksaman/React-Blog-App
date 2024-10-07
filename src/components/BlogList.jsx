
import React from 'react';
import { Link } from 'react-router-dom';
import '../BlogList.css';

const BlogList = ({ posts, deletePost }) => {
  return (
    <div className="blog-list">
      <h2>Blog Yazıları</h2>
      {posts.length === 0 ? (
        <p>Henüz hiç yazı eklenmedi.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
            <div className="post-actions">
              <Link to={`/post/${post.id}`} className="read-more">Devamını Oku</Link>
              <Link to={`/edit/${post.id}`} className="edit">Düzenle</Link>
              <button onClick={() => deletePost(post.id)} className="delete">Sil</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
