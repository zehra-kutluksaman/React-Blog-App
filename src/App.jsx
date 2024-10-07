// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  // LocalStorage'dan veriyi çekmek için
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // LocalStorage'a veri kaydetmek için
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogList posts={posts} deletePost={deletePost} />} />
          <Route path="/post/:id" element={<BlogPost posts={posts} />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
          <Route path="/edit/:id" element={<EditPost posts={posts} updatePost={updatePost} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
