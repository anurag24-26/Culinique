import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './index.css';
import Home from './Components/HomePage.jsx';
import About from './Components/About.jsx';
import Menu from './Components/Menu.jsx';
import Gallery from './Components/Gallery.jsx';
import Contact from './Components/Contact.jsx';
const App = () => {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
     
      </div>
    </Router>
  );
};

export default App;
