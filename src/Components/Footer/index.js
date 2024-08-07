import React from 'react';
import './FooterSection.css'; // Assuming you have a CSS file for styling
import TradeMark from '../../assets/img10.png'
const FooterSection = () => {
  return (
    <footer className="footer-section">
<h1 className='heading-footer'> Aishaala <img className='tradmark' src={TradeMark}/> <br/> <span className='heading-span'>Powered by Mobishaala.com</span></h1>

      <div className="footer-container">
        
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#office">Office</a></li>
            <li><a href="#head-office">Head Office</a></li>
            <li><a href="#branch-office">Branch Office</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#admin">Admin</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Legal Stuff</h3>
          <ul>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-service">Terms of Service</a></li>
            <li><a href="#refunds">Refunds</a></li>
            <li><a href="#disclaimer">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Aishalaa. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
