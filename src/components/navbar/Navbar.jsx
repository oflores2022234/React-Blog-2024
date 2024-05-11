/* eslint-disable no-unused-vars */
import React from 'react';
import '../../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <span style={{fontWeight: 'bold'}}>Alejandros Blogs</span>
        </li>
        <li className="nav-item">
          <a href="https://www.facebook.com/profile.php?id=100008747838313&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.instagram.com/afloyes_09?igsh=ZXhybDh1bmJhczVp" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/oflores2022234" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/oscar-alejandro-flores-yllescas-365b66249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </nav>
  );
};