import React from 'react'
import './CompressoresPage.css'
import Navbar from '../componentes/Navbar'
import MainMenu from '../componentes/MainMenu'
import Footer from '../componentes/Footer'



const products = [
    {
      id: 1,
      name: 'BRAVO CSL 25 BR / 200 ',
      description: 'COMPRESSOR DE AR DE PISTÃO BRAVO CSL 25 BR / 200 - SÉRIE ESPECIAL 60 ANOS SCHULZ',
      image: './assets/Products/Compressores/Compressor-1.jpg',
      link: '/compressores/pistao',
      type: 'Compressores Pistão'
    }, 
    
    {
        id: 2,
        name: 'SRP 4015E TS FLEX',
        description: 'COMPRESSOR DE AR DE PARAFUSO SRP 4015E TS FLEX',
        image: './assets/Products/Compressores/Compressor-2.jpg',
        link: '/compressores/parafuso',
        type: 'Compressores Parafuso'
      },

      {
        id: 3,
        name: 'CSD 27/200',
        description: 'COMPRESSOR DE AR ISENTO DE ÓLEO ',
        image: './assets/Products/Compressores/Compressor-3.jpg',
        link: '/compressores/odontologicos',
        type: 'Compressores Isento'
      },

      {
        id: 4,
        name: 'COMPRESSOR DE AR JET MASTER - G5',
        description: 'COMPRESSOR DE AR DIRETO ',
        image: './assets/Products/Compressores/Compressor-4.jpg',
        link: '/compressores/jet',
        type: 'Compressores de Ar-Direto'
      },
  ];




const CompressoresPage = () => {
  return (
    <>
      <Navbar />
      <div className='logo'>
      <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
      </div>
      <MainMenu />
      <div className="main">
        <div className="compressors-page">
          {products.map((product) => (
            <a key={product.id} href={product.link} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className='pLink'>Ver Mais {product.type}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};




export default CompressoresPage