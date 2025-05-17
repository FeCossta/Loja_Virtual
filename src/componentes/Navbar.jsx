import './Navbar.css';
import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMailBulk } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/#sobre-nos">Sobre nós</a></li> 
          <li><a href="/services">Serviços</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
      <div className="contact-block">
        <div className="contact-item">
          <FaPhoneAlt />
          <p>21 97039-7632</p>
        </div>
        <div className="contact-item">
          <FaWhatsapp />
          <p>21 97039-7632</p>
        </div>
        <div className="contact-item">
          <FaMailBulk />
          <a href="/contato">Fale conosco</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
