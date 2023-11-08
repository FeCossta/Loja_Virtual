import React from 'react'
import './Parafuso.css'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products = [
    {
      id: 13,
      name: 'SRP 4015E TS FLEX',
      description: 'COMPRESSOR DE AR DE PARAFUSO - COM RESERVATÓRIO',
      image: '../assets/Products/Compressores/pistao/pist13.jpg',
      link: '/compressores/srp4015ts',
    },
    {
      id: 14,
      name: 'SRP 4050E FLEX ADS',
      description: 'COMPRESSOR DE AR DE PARAFUSO',
      image: '../assets/Products/Compressores/pistao/pist14.jpg',
      link: '/compressores/srp4050flexads',
    },
    {
      id: 15,
      name: 'SRP 4100E AD FLEX',
      description: 'COMPRESSOR DE AR DE PARAFUSO',
      image: '../assets/Products/Compressores/pistao/pist15.jpg',
      link: '/compressores/srp4100adflex',
    },
    {
      id: 16,
      name: 'SRP-3015 COMPACT',
      description: 'COMPRESSOR DE AR DE PARAFUSO',
      image: '../assets/Products/Compressores/pistao/pist16.jpg',
      link: '/compressores/srp3015compact',
    },
    {
      id: 17,
      name: 'SRP 4015 E FLEX ADS',
      description: 'COMPRESSOR DE AR DE PARAFUSO',
      image: '../assets/Products/Compressores/pistao/pist17.jpg',
      link: '/compressores/srp4015flexads',
    },
    {
      id: 18,
      name: 'SCROLL SCR 4005 R',
      description: 'COMPRESSOR DE AR DE PARAFUSO - COM RESERTVATÓRIO',
      image: '../assets/Products/Compressores/pistao/pist18.jpg',
      link: '/compressores/scr4005r',
    },
    {
      id: 19,
      name: 'SCROLL SCR 4005 TS',
      description: 'COMPRESSOR DE AR DE PARAFUSO - COM RESERVATÓRIO E SECADOR',
      image: '../assets/Products/Compressores/pistao/pist19.jpg',
      link: '/compressores/src4005ts',
    },
    {
      id: 20,
      name: 'SRP 4005E TS',
      description: 'COMPRESSOR DE AR DE PARAFUSO - COM RESERVATÓRIO',
      image: '../assets/Products/Compressores/pistao/pist20.jpg',
      link: '/compressores/srp4005ets',
    },
    {
      id: 21,
      name: 'SRP 4008E TS',
      description: 'COMPRESSOR DE AR DE PARAFUSO - COM RESERVATÓRIO',
      image: '../assets/Products/Compressores/pistao/pist21.jpg',
      link: '/compressores/srp4008ets',
    },
    {
      id: 22,
      name: 'SRP 4010E TS',
      description: 'COMPRESSOR DE AR DE PARAFUSO - COM RESERVATÓRIO',
      image: '../assets/Products/Compressores/pistao/pist22.jpg',
      link: '/compressores/srp4010ets',
    },
    {
      id: 23,
      name: ' SRP 4010E TS FLEX',
      description: 'COMPRESSOR DE AR DE PARAFUSO - COM RESERVATÓRIO',
      image: '../assets/Products/Compressores/pistao/pist23.jpg',
      link: '/compressores/srp4010etsflex',
    },
    {
      id: 24,
      name: 'SRP 4015 R',
      description: 'COMPRESSOR DE AR DE PARAFUSO - COM RESERVATÓRIO',
      image: '../assets/Products/Compressores/pistao/pist24.jpg',
      link: '/compressores/srp4015r',
    },
  ];
  
  

const Parafuso = () => {
  return (
    <>
      <Navbar />
      <div className='logo'>
      <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
      </div>
      <MainMenu />
      <div className='title'>
        <h1>
          Compressores Parafuso
        </h1>
        
      </div>
      <div className="main">
        <div className="pistao-page">
          {products.map((product) => (
            <a key={product.id} href={product.link} className="pistao-product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className='description'>{product.description}</p>
              <p className='pLink'>Clique para ver mais informações</p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Parafuso