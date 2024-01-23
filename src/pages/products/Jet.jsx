import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';



  const products =  [
    {
      id: 35,
      name: 'MSW 40 FORT AD C',
      description: 'COMPRESSORES DE AR DIRETO',
      image: '../assets/Products/Compressores/pistao/pist35.jpg',
      link: '/compressores/msw40fort',
    },
    {
      id: 36,
      name: 'BRAVO CSI 2,6 BR AD-S',
      description: 'COMPRESSORES DE AR DIRETO',
      image: '../assets/Products/Compressores/pistao/pist36.jpg',
      link: '/compressores/bravocsi26br',
    },
    {
      id: 37,
      name: 'BRAVO CSI 4 BR AD',
      description: 'COMPRESSORES DE AR DIRETO',
      image: '../assets/Products/Compressores/pistao/pist37.jpg',
      link: '/compressores/bravocsi4br',
    },
    {
      id: 38,
      name: 'MSW 60 FORT AD C',
      description: 'COMPRESSORES DE AR DIRETO',
      image: '../assets/Products/Compressores/pistao/pist38.jpg',
      link: '/compressores/msw60fort',
    },
    {
      id: 39,
      name: 'MSW 60 MAX AD',
      description: 'COMPRESSORES DE AR DIRETO',
      image: '../assets/Products/Compressores/pistao/pist39.jpg',
      link: '/compressores/msw60max',
    },
    {
      id: 40,
      name: 'PRO CSV 10 AD',
      description: 'COMPRESSORES DE AR DIRETO',
      image: '../assets/Products/Compressores/pistao/pist40.jpg',
      link: '/compressores/procsv10ad',
    },
    {
      id: 41,
      name: 'CSD 5',
      description: 'COMPRESSORES DE AR DIRETO COM BASE - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist41.jpg',
      link: '/compressores/csd5',
    },
    {
      id: 42,
      name: 'Jet Master - G5',
      description: 'COMPRESSORES DE AR DIRETO',
      image: '../assets/Products/Compressores/pistao/pist42.jpg',
      link: '/compressores/jetmasterg5',
    },
  ];
  





const Jet = () => {
  return (
    <>
      <Navbar />
      <div className='logo'>
      <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
      </div>
      <MainMenu />
      <div className='title'>
        <h1>
          Compressores de Ar direto
        </h1>
        
      </div>
      <div className="main">
        <div className="pistao-page">
          {products.map((product) => (
            <a key={product.id} href={product.link} className="pistao-product">
              <img src={product.image} alt={product.name} />
              <h3 className='product-name1'>{product.name}</h3>
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

export default Jet