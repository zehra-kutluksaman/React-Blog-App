// src/components/EditPost.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../EditPost.css';

const EditPost = ({ posts, updatePost }) => {
  const { id } = useParams();
  const postToEdit = posts.find((p) => p.id === id);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  }, [postToEdit]);

  if (!postToEdit) {
    return (
      <div className="edit-post">
        <p>Yazı bulunamadı.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      alert('Başlık ve içerik boş olamaz!');
      return;
    }

    const updated = {
      id,
      title,
      content,
    };

    updatePost(updated);
    navigate('/');
  };

  return (
    <div className="edit-post">
      <h2>Yazıyı Düzenle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Başlık</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Yazı başlığını girin"
          />
        </div>
        <div className="form-group">
          <label>İçerik</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Yazı içeriğini girin"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Güncelle</button>
      </form>
    </div>
  );
};

export default EditPost;
