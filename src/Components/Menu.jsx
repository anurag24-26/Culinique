// Menu.jsx
import React from "react";
import "../styles/Menu.css";
import menuimage from '../assets/menu1.png';
 // Adjust the path if needed

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <p>Menu That Fits Your Palatte</p>
        <h1>Today's Special</h1>
      </div>
      <div className="menu-content">
        <div className="menu-section wine-beer">
          <h2>Wine & Beer</h2>
          <ul>
            <li>
              <span>Chapel Hill Shiraz</span>
              <span>$56</span>
            </li>
            <li>
              <span>Catena Malbee</span>
              <span>$59</span>
            </li>
            <li>
              <span>La Vieillw Rose</span>
              <span>$44</span>
            </li>
            <li>
              <span>Rhino Pale Ale</span>
              <span>$31</span>
            </li>
            <li>
              <span>Irish Guinness</span>
              <span>$26</span>
            </li>
          </ul>
        </div>
        <div className="menu-image">
          <img src={menuimage} alt="Menu Special" />
        </div>
        <div className="menu-section cocktails">
          <h2>Cocktails</h2>
          <ul>
            <li>
              <span>Aperol Spritz</span>
              <span>$20</span>
            </li>
            <li>
              <span>Dark 'N' Stormy</span>
              <span>$16</span>
            </li>
            <li>
              <span>Daiquiri</span>
              <span>$10</span>
            </li>
            <li>
              <span>Old Fashioned</span>
              <span>$31</span>
            </li>
            <li>
              <span>Negroni</span>
              <span>$26</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;