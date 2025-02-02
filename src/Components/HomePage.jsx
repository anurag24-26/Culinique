import React from 'react'
import '../styles/HomePage.css'
import About from './About'
import Menu from './Menu'
import Gallery from './Gallery.jsx';
import ChefWord from './Chefwords'
import welcomeimage from '../assets/welcome.png'
const HomePage = () => {
  return (
    <>
    <div className="container">
      <div className="content">
        <h4>Chase The New Flavour</h4>
        <h1>The Key To Fine Dining</h1>
        <p>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
        </p>
        <button className="explore-button">Explore Menu</button>
      </div>
      <div className="image-container">
        <img src={welcomeimage} alt="Delicious food" />
      </div>
    </div>

    <About/>
    <Menu/>
    <ChefWord/>
    <Gallery/>
    </>
  );
}

export default HomePage;
