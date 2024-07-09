import React from 'react';

const Header = () => {
  return (
    <header className="bg-darkBlue text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TechDepot</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-lightBlue">Home</a></li>
            <li><a href="#" className="hover:text-lightBlue">Promos</a></li>
            <li><a href="#" className="hover:text-lightBlue">Products</a></li>
            <li><a href="#" className="hover:text-lightBlue">About Us</a></li>
          </ul>
        </nav>
        <div>
          <a href="#" className="hover:text-lightBlue">Search</a>
          <a href="#" className="ml-4 hover:text-lightBlue">Cart</a>
        </div>
      </div>
    </header>
  );
};

export default Header;