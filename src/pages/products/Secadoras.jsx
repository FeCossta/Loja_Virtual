import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products =  [
    {
      id: 43,
      name: 'SDS 120',
      description: 'SECADORAS DE AR SCHULZ',
      image: '../assets/Products/Tratamento/trat1.jpg',
      link: '/tratamento/sds120',
    },
    {
      id: 44,
      name: 'SDS 160',
      description: 'SECADORAS DE AR SCHULZ',
      image: '../assets/Products/Tratamento/trat2.jpg',
      link: '/tratamento/sds160',
    },
    {
      id: 45,
      name: 'SRS 130 COMPACT II',
      description: 'SECADORAS DE AR SCHULZ',
      image: '../assets/Products/Tratamento/trat3.jpg',
      link: '/tratamento/srs130compact2',
    },
    {
      id: 46,
      name: 'SRS 190 COMPACT II',
      description: 'SECADORAS DE AR SCHULZ',
      image: '../assets/Products/Tratamento/trat4.jpg',
      link: '/tratamento/srs190compact2',
    },
    {
      id: 47,
      name: 'SRS 130 DYNAMIC SCHULZ',
      description: 'SECADORAS DE AR SCHULZ',
      image: '../assets/Products/Tratamento/trat5.png',
      link: '/tratamento/srs130dynamic',
    },
    {
      id: 48,
      name: 'SRS 20 DYNAMIC SCHULZ',
      description: 'SECADORAS DE AR SCHULZ',
      image: '../assets/Products/Tratamento/trat6.png',
      link: '/tratamento/srs20dynamic',
    },
    {
      id: 49,
      name: 'SRS 30 DYNAMIC SCHULZ',
      description: 'SECADORAS DE AR SCHULZ',
      image: '../assets/Products/Tratamento/trat7.png',
      link: '/tratamento/srs30dynamic',
    },
    {
      id: 50,
      name: 'SRS1000',
      description: 'SECADORAS DE AR SCHULZ',
      image: '../assets/Products/Tratamento/trat8.jpg',
      link: '/tratamento/srs1000',
    },
  ];
  

const Secadoras = () => {
  return (
    <>
      <Navbar />
      <div className='logo'>
      <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
      </div>
      <MainMenu />
      <div className='title'>
        <h1>
          Secadoras de Ar
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

export default Secadoras