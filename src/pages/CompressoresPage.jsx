import React from 'react'
import './CompressoresPage.css'
import Navbar from '../componentes/Navbar'
import MainMenu from '../componentes/MainMenu'
import Footer from '../componentes/Footer'



const products = [
    {
      id: 1,
      name: 'COMPRESSORES PISTÃO ',
      description: 'COMPRESSOR DE AR DE PISTÃO SCHULZ',
      image: './assets/Products/Compressores/Compressor-1.jpg',
      link: '/compressores/pistao',
      type: 'Compressores Pistão'
    }, 
    
    {
        id: 2,
        name: 'COMPRESSORES PARAFUSO',
        description: 'COMPRESSOR DE AR DE PARAFUSO ',
        image: './assets/Products/Compressores/Compressor-2.jpg',
        link: '/compressores/parafuso',
        type: 'Compressores Parafuso'
      },

      {
        id: 3,
        name: 'COMPRESSORES ISENTOS DE ÓLEO',
        description: 'COMPRESSOR DE AR ISENTO DE ÓLEO ',
        image: './assets/Products/Compressores/Compressor-3.jpg',
        link: '/compressores/isento',
        type: 'Compressores Isento'
      },

      {
        id: 4,
        name: 'COMPRESSORES DE AR DIRETO',
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
              <h3 className='product-name1'>{product.name}</h3>
              
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