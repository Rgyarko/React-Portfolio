import React from 'react';
import Icon1 from '../../../assets/github-icon.png';
import Icon2 from '../../../assets/instagram-icon.png';
import './Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <p>Thanks for Visiting my Portfolio. Contact Me  with any Questions!</p>
      <a href='https://github.com/Rgyarko'><img src={Icon1} alt="GitHub" /></a>
      <a href='https://www.instagram.com/Efya.ameyaw'><img src={Icon2} alt="Instagram" /></a>
      </footer>
  )
}

export default Footer;