import React, { useState } from 'react';
import './Header.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={`menu-toggle ${isOpen ? 'is-active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <header className={`site-header ${isOpen ? 'active' : ''}`}>
        <div className="nav-container">
          <div className="logo-area">
           
          </div>
          
          <nav className="main-nav">
            <ul className="nav-links">
              <li>
                <a href="#home" onClick={closeMenu}>
                  <span className="nav-num">01</span> Home
                </a>
              </li>
              <li>
                <a href="#education" onClick={closeMenu}>
                  <span className="nav-num">02</span> Education
                </a>
              </li>
              <li>
                <a href="#skills" onClick={closeMenu}>
                  <span className="nav-num">03</span> Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={closeMenu}>
                  <span className="nav-num">04</span> Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  <span className="nav-num">05</span> Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}