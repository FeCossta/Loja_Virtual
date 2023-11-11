import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';





const products =  [
    {
      id: 54,
      name: 'PS 16',
      description: 'Purgador Eletronico',
      image: '../assets/Products/Tratamento/trat12.jpg',
      link: '/tratamento/ps16',
    },
    {
      id: 55,
      name: 'DRENO MAGNÉTICO DM',
      description: 'Purgador Eletronico',
      image: '../assets/Products/Tratamento/trat13.jpg',
      link: '/tratamento/drenodm',
    },
    {
      id: 56,
      name: 'PS16/EZI',
      description: 'Purgador Eletronico',
      image: '../assets/Products/Tratamento/trat14.jpg',
      link: '/tratamento/ps16ezi',
    },

]







const Purgadores = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
    <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
    </div>
    <MainMenu />
    <div className='title'>
      <h1>
        Purgadores Eletrônicos
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

export default Purgadores