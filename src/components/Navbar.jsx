
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Blog Köşesi</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/create">Yeni Yazı</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
