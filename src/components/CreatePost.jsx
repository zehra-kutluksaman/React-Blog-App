
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../CreatePost.css';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      alert('Başlık ve içerik boş olamaz!');
      return;
    }

    const newPost = {
      id: uuidv4(),
      title,
      content,
    };

    addPost(newPost);
    navigate('/');
  };

  return (
    <div className="create-post">
      <h2>Yeni Yazı Oluştur</h2>
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
        <button type="submit" className="submit-button">Yazıyı Ekle</button>
      </form>
    </div>
  );
};

export default CreatePost;
