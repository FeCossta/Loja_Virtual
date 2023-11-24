import React from 'react';
import './HomePage.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import Navbar from '../componentes/Navbar';
import ActionHeader from '../componentes/ActionHeader';
import MainMenu from '../componentes/MainMenu';
import Banner from '../componentes/Banner';
import SobreNos from '../componentes/SobreNos';
import Footer from '../componentes/Footer';





function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
       
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);


  window.onscroll = function () {
    const button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };


  return (
    <div className="App">
      <header className="App-header">        
        <Navbar/>
       <ActionHeader/>
        
      </header>
      <main className="App-main">
      <MainMenu/>
      <Banner/>
      <div className="sacTopo" id='/sobre-nos'>
        <div className="blocks">
          <div className="block">
            <a href="/contato">
              <div className="desc">
                <h3 className="title">Venda Especializada</h3>
                <p>Conte com nossa equipe para ajudá-lo a escolher seu equipamento e peças de manutenção</p>
              </div>
            </a>
          </div>
          <div className="block">
          <a href="/contato">
              <div className="desc">
                <h3 className="title">Assistencia técnica</h3>
                <p> Oferecemos suporte técnico especializado para resolver problemas com seus equipamentos.</p>        
              </div>
            </a>
          </div>
          <div className="block">
          <a href="#contato">
              <div className="desc">
                <h3 className="title">Fale conosco</h3>
                <p>Entre em contato conosco para tirar suas dúvidas ou obter mais informações sobre nossos produtos e serviços.</p>        
              </div>
            </a>
          </div>
        </div>
      </div>
      <SobreNos/>
      </main>
      <Footer/>
      <button id="back-to-top" onClick={() => window.scrollTo(0, 0)}>
        Inicio
      </button>
    </div>
  );
}

export default App;
