import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">TechDepot</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/promos" className="hover:text-gray-400">Promos</a></li>
            <li><a href="/products" className="hover:text-gray-400">Products</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <input type="text" placeholder="Search" className="px-2 py-1 rounded-md" />
          <button className="bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-700">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
