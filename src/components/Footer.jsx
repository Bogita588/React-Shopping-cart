import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Your logo or branding */}
          <h2>Bogita Logo</h2>
        </div>
        <div className="footer-links">
         
            <ul>
              

                
              <li><a href="#home">Home</a></li>
              
              <li><a href="#about">About</a></li>
            
              <li><a href="#contact">Contacts</a></li>
             
        
            </ul>
        </div>
        <div className="footer-social">
          <a href="" target="blank"><FaFacebook /></a>
          <a href="https://twitter.com/BrianBogita" target="blank"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/bogita-brian-41b9b21a0/" target="blank"><FaLinkedin /></a>
          </div>
        </div>
      <div className="footer-bottom">
        
        <p>&copy; 2024 Bogita Brian. All rights reserved.</p>
      </div>
    </footer>
  );
};

