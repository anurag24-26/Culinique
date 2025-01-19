import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './index.css';
import Home from './Components/HomePage.jsx';
import About from './Components/About.jsx';

const App = () => {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <About/>
      </div>
    </Router>
  );
};

export default App;
