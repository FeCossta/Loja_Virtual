import React from 'react';
import './LayoutProdcts.css';
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';

const LayoutProdcts = ({ children }) => {
  return (
    <div className="LayoutProdcts">
      <Navbar />
      <div className='logo'>
      <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
      </div>
      <MainMenu />
      {children} 
      <Footer />
    </div>
  );
};

export default LayoutProdcts;
