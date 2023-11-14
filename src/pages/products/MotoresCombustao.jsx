import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';




const products = [
    {
        id:73,
        name: 'MGS 13.0',
        description: 'Motor a Combustão',
        image: '../assets/Products/Equipamentos/eq15.jpg',
        link: '/equipamentos/mgs13',
        type: 'Motor a Combustão'
    },
    {
        id:74,
        name: 'MGS 5.5',
        description: 'Motor a Combustão',
        image: '../assets/Products/Equipamentos/eq16.jpg',
        link: '/equipamentos/mgs5-5',
        type: 'Motor a Combustão'
    },
    {
        id:75,
        name: ' MGS 6.5',
        description: 'Motor a Combustão',
        image: '../assets/Products/Equipamentos/eq17.jpg',
        link: '/equipamentos/mgs6-5',
        type: 'Motor a Combustão'
    },
    {
        id:76,
        name: ' MGS 8.0',
        description: 'Motor a Combustão',
        image: '../assets/Products/Equipamentos/eq18.jpg',
        link: '/equipamentos/mgs8-0',
        type: 'Motor a Combustão'
    },

]






const MotoresCombustao = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
    <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
    </div>
    <MainMenu />
    <div className='title'>
      <h1>
       Motores a Combustão
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

export default MotoresCombustao