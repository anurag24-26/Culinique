import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './index.css'
import Home from './Components/HomePage.jsx'
import About from './Components/About.jsx';
const Menu = () => <h2>About Us</h2>;

const Gallery = () => <h2>Gallery</h2>;
const Contact = () => <h2>Chef's Word</h2>;

const App = () => {
  return (
    <Router>
      <div className='main'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
