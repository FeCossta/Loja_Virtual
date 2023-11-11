import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';





const products =  [
    {
      id: 51,
      name: 'SL 10',
      description: 'SEPARADOR ÁGUA E ÓLEO',
      image: '../assets/Products/Tratamento/trat9.jpg',
      link: '/tratamento/sl10',
    },
    {
      id: 52,
      name: 'SL 20',
      description: 'SEPARADOR ÁGUA E ÓLEO',
      image: '../assets/Products/Tratamento/trat10.jpg',
      link: '/tratamento/sl20',
    },
    {
      id: 53,
      name: 'SL 30',
      description: 'SEPARADOR ÁGUA E ÓLEO',
      image: '../assets/Products/Tratamento/trat11.jpg',
      link: '/tratamento/sl30',
    },

]



const SeparadorAO = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
    <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
    </div>
    <MainMenu />
    <div className='title'>
      <h1>
        Separadores de Água e Óleo
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

export default SeparadorAO