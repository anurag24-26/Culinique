import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import Logo1 from '../assets/restaurant-svgrepo-com.svg'; 
import Profileimage from '../assets/profile.png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
      <Link to="/Profile" >
          <img src={Profileimage} alt="" />
        </Link>

        <img src={Logo1} className="navbar-logo-svg" alt="Logo" />
        <h1 className="navbar-logo">Culinique</h1>
      </div>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link to="/menu" className="menu">
          <li>Menu</li>
        </Link>
        <Link to="/gallery" className="gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/contact" className="contact">
          <li>Contact</li>
        </Link>
       
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
      

     
    </nav>
  );
};

export default Navbar;
