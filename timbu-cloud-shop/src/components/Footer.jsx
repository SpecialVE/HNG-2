import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li><a href="/">Services</a></li>
          <li><a href="/">Our Team</a></li>
          <li><a href="/">Partners</a></li>
        </ul>
        </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Client</a></li>
          <li><a href="/">Employment</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Enquiries</h3>
        <ul>
          <li><a href="/">Prices</a></li>
          <li><a href="/">Warranty</a></li>
          <li><a href="/">Customer Service</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://twitter.com/timbudevices">@timbudevices</a></li>
          <li><a href="https://facebook.com/timbudevices">Facebook</a></li>
          <li><a href="https://tiktok.com/@timbudevices">TikTok</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
