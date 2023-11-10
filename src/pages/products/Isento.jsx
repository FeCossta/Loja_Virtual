import React from 'react'
import './Isento.css'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';




const products = [
    {
      id: 25,
      name: 'CSV 15 / 250',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist25.jpg',
      link: '/compressores/csv15250',
    },
    {
      id: 26,
      name: 'MSV 12 / 100',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist26.jpg',
      link: '/compressores/msv12100',
    },
    {
      id: 27,
      name: 'CSV 20 / 250',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist27.jpg',
      link: '/compressores/csv20250',
    },
    {
      id: 28,
      name: 'MSV 12 / 200',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist28.jpg',
      link: '/compressores/msv12200',
    },
    {
      id: 29,
      name: 'CSD 18/100',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist29.jpg',
      link: '/compressores/csd18100',
    },
    {
      id: 30,
      name: 'CSD 27/200',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist30.jpg',
      link: '/compressores/csd27200',
    },
    {
      id: 31,
      name: 'CSD 10/60',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist31.jpg',
      link: '/compressores/csd1060',
    },
    {
      id: 32,
      name: 'MSV 6 / 30',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist32.jpg',
      link: '/compressores/msv630',
    },
    {
      id: 33,
      name: 'CSD 10/40',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist33.jpg',
      link: '/compressores/csd1040',
    },
    {
      id: 34,
      name: 'CSD 9 AR DIRETO COM BASE',
      description: 'COMPRESSOR DE AR ODONTOLÓGICO - ISENTO DE ÓLEO',
      image: '../assets/Products/Compressores/pistao/pist34.jpg',
      link: '/compressores/csd9',
    },
   
   
  ];
  





const Isento = () => {
  return (
    <>
      <Navbar />
      <div className='logo'>
      <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
      </div>
      <MainMenu />
      <div className='title'>
        <h1>
          Compressores Odontológicos - Isento de óleo
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

export default Isento