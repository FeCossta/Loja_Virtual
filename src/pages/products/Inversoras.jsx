import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';




const products = [
    {
        id:69,
        name: 'MTS 150 COMPACT',
        description: 'Inversoras de Solda',
        image: '../assets/Products/Equipamentos/eq11.jpg',
        link: '/equipamentos/mts150-compact',
        type: 'Inversoras de Solda'
    },
    {
        id:70,
        name: ' MTS 250 COMPACT',
        description: 'Inversoras de Solda',
        image: '../assets/Products/Equipamentos/eq12.jpg',
        link: '/equipamentos/mts250-compact',
        type: 'Inversoras de Solda'
    },
    {
        id:71,
        name: ' MTS 250M COMPACT ',
        description: 'Inversoras de Solda',
        image: '../assets/Products/Equipamentos/eq13.jpg',
        link: '/equipamentos/mts250m-compact',
        type: 'Inversoras de Solda'
    },
    {
        id:72,
        name: ' MTS 250M PROFESSIONAL ',
        description: 'Inversoras de Solda',
        image: '../assets/Products/Equipamentos/eq14.jpg',
        link: '/equipamentos/mts250m-professional',
        type: 'Inversoras de Solda'
    },

]







const Inversoras = () => {
  return (
     <>
    <Navbar />
    <div className='logo'>
    <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
    </div>
    <MainMenu />
    <div className='title'>
      <h1>
       Máquinas de solda
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

export default Inversoras