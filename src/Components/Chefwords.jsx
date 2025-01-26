import React from 'react';
import '../styles//ChefWord.css';
import chefImage from '../assets/chef.png'; // Adjust the path if needed
import sign from '../assets/sign.png'
const ChefWord = () => {
  return (
    <div className="chefword-container">
      <div className="chefword-content">
        <div className="chefword-image">
          <img src={chefImage} alt="Chef Kevin Luo" />
        </div>
        <div className="chefword-text">
          <p className="chefword-header">Chef's Word</p>
          <h1>What We Believe In</h1>
          <p className="chefword-quote">
            <span>&ldquo;</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat. Aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </p>
          <p className="chefword-signature">
            <strong>Kevin Luo</strong> <br /> Chef & Founder
          </p>
<img className='chefword-signature' src={sign} alt="" />

        </div>
      </div>
    </div>
  );
};

export default ChefWord;