import React from 'react';
import './Header.css'; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">TechDepot</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/promos">Promos</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;