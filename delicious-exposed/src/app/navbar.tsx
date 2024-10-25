// Navbar.tsx
import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        const links = navbar.getElementsByTagName('a');
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'transparent';
          navbar.style.borderBottom = '2px solid transparent';
          for (let link of links) {
            link.style.color = 'black';
          }
        } else {
          navbar.style.backgroundColor = 'black';
          navbar.style.borderBottom = '2px solid #860000';
          for (let link of links) {
            link.style.color = 'white';
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        width: '100%',
        height: '60px',
        alignItems: 'right',
        justifyContent: 'right',
        backgroundColor: 'black',
        padding: '5px 5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
        borderBottom: '2px solid #860000',
      }}
    >
      <a href="#home" style={{ margin: '0 10px', color: 'white', transition: 'color 0.3s ease' }}>Home</a>
      <a href="#about" style={{ margin: '0 10px', color: 'white' }}>About</a>
      <a href="#blog" style={{ margin: '0 10px', color: 'white' }}>Blog</a>
      <a href="#contact" style={{ margin: '0 10px', color: 'white' }}>Contact</a>
    </nav>
  );
};

export default Navbar;
