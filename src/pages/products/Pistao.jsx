import React from 'react'
import "./Pistao.css"
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products = [
  {
    id: 1,
    name: 'FORT MSWV 60 / 425',
    description: 'COMPRESSOR DE AR DE PISTÃO - MOTOR ABERTO ',
    image: '../assets/Products/Compressores/pistao/pist1.jpg',
    link: '/compressores/fortmsw60425',
   
  }, 
  
  {
      id: 2,
      name: 'CSV 20/150',
      description: 'COMPRESSOR DE AR DE PISTÃO',
      image: '../assets/Products/Compressores/pistao/pist2.jpg',
      link: '/compressores/max2050',
       
    },

    {
      id: 3,
      name: 'BRAVO CSL 15 BR / 200',
      description: 'COMPRESSOR DE AR DE PISTÃO ',
      image: '../assets/Products/Compressores/pistao/pist3.jpg',
      link: '/compressores/bravo15br200',
      
    },

    {
      id: 4,
      name: ' BRAVO CSL 20 BR / 200',
      description: 'COMPRESSOR DE AR DE PISTÃO ',
      image: '../assets/Products/Compressores/pistao/pist4.jpg',
      link: '/compressores/bravo20br200',
      
    },
    {
      id: 5,
      name: 'BRAVO CSL 25 BR / 250',
      description: 'COMPRESSOR DE AR DE PISTÃO',
      image: '../assets/Products/Compressores/pistao/pist5.jpg',
      link: '/compressores/bravo25br250',
      
    }, 
    {
      id: 6,
      name: 'BRAVO CSL 30 BR / 250',
      description: 'COMPRESSOR DE AR DE PISTÃO',
      image: '../assets/Products/Compressores/pistao/pist6.jpg',
      link: '/compressores/bravo30br250',
      
    }, 
    {
      id: 7,
      name: 'BRAVO CSL 10 BR / 100',
      description: 'COMPRESSOR DE AR DE PISTÃO',
      image: '../assets/Products/Compressores/pistao/pist7.jpg',
      link: '/compressores/bravocsl10br100',
      
    }, 
    {
      id: 8,
      name: 'BRAVO CSL 10 BR / 200',
      description: 'COMPRESSOR DE AR DE PISTÃO',
      image: '../assets/Products/Compressores/pistao/pist8.jpg',
      link: '/compressores/bravocsl10br200',
      
    }, 
    {
      id: 9,
      name: 'BRAVO CSL 15 BR / 100',
      description: 'COMPRESSOR DE AR DE PISTÃO',
      image: '../assets/Products/Compressores/pistao/pist9.jpg',
      link: '/compressores/bravocsl15br100',
      
    }, 
    {
      id: 10,
      name: 'BRAVO CSL 15 BR / 200',
      description: 'COMPRESSOR DE AR DE PISTÃO',
      image: '../assets/Products/Compressores/pistao/pist10.jpg',
      link: '/compressores/bravocsl15br200',
      
    }, 
    {
      id: 11,
      name: 'BRAVO CSL 40 BR / 250',
      description: 'COMPRESSOR DE AR DE PISTÃO',
      image: '../assets/Products/Compressores/pistao/pist11.jpg',
      link: '/compressores/bravocsl40br250',
      
    }, 
    {
      id: 12,
      name: 'BRAVO CSL 50 BR / 350',
      description: 'COMPRESSOR DE AR DE PISTÃO',
      image: '../assets/Products/Compressores/pistao/pist12.jpg',
      link: '/compressores/bravocsl60br350',
      
    }, 
];



const Pistao = () => {
  return (
    <>
      <Navbar />
      <div className='logo'>
      <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
      </div>
      <MainMenu />
      <div className='title'>
        <h1>
          Compressores Pistão
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
  );
};


export default Pistao