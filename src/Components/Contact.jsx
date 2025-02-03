import React from 'react'
import "../styles/Contact.css";
import { motion } from "framer-motion";
function Contact() {
  return (
    <div>
    <section className="contact-section">
      <h2>Contact Us</h2>
      <h4>Get in touch with us for any inquiries, feedback, or assistance</h4>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Send Message
        </motion.button>
      </form>
    </section>

    {/* Footer */}
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h3>Culinique</h3>
      <p>Bringing flavors to life with passion and authenticity.</p>
    </div>
    
    <div className="footer-section">
      <h4>Contact Us</h4>
      <p>📍 123 Food Street, Gourmet City, 56789</p>
      <p>📞 +1 234 567 890</p>
      <p>✉️ support@culinique.com</p>
    </div>

    <div className="footer-section">
      <h4>Follow Us</h4>
      <div className="social-links">
        <a href="#" aria-label="Facebook">📘</a>
        <a href="#" aria-label="Instagram">📷</a>
        <a href="#" aria-label="Twitter">🐦</a>
      </div>
    </div>
  </div>
  
  <div className="footer-bottom">
    <p>© 2025 Culinique. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Contact