import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-container">
        <img 
          src="/icons/logo.png" 
          alt="Robotics Club Logo" 
          className="header-logo club-logo" 
        />
        
        <div className="header-social">
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <img 
              src="/icons/icons8-instagram-120.png" 
              alt="Instagram" 
              className="social-icon" 
            />
          </a>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <img 
              src="/icons/icons8-linkedin-120.png" 
              alt="LinkedIn" 
              className="social-icon" 
            />
          </a>
          <a 
            href="#" 
            className="social-link"
            aria-label="WeChat"
          >
            <img 
              src="/icons/icons8-wechat-120.png" 
              alt="WeChat" 
              className="social-icon" 
            />
          </a>
        </div>

        <img 
          src="/icons/NYUSH logo.png" 
          alt="NYU Shanghai Logo" 
          className="header-logo nyush-logo" 
        />
      </div>
    </header>
  );
}
