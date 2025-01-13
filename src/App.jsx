import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

const Home = () => <h2>Welcome to GourmetFusion!</h2>;
const About = () => <h2>About Us</h2>;
const Menu = () => <h2>Our Menu</h2>;
const Gallery = () => <h2>Gallery</h2>;
const Contact = () => <h2>Contact Us</h2>;

const App = () => {
  return (
    <Router>
      <div>
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
