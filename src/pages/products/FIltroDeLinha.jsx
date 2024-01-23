import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';





const products =  [
    {
      id: 57,
      name: 'UNIDADE FR 1/2 - 2.600 L/MIN',
      description: 'Filtro De Linha',
      image: '../assets/Products/Tratamento/trat15.jpg',
      link: '/tratamento/fr122600',
    },
    {
      id: 58,
      name: 'UNIDADE FR 1/4 - 2.080 L/MIN',
      description: 'Filtro De Linha',
      image: '../assets/Products/Tratamento/trat16.jpg',
      link: '/tratamento/fr142080',
    },


]


const FIltroDeLinha = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
    <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
    </div>
    <MainMenu />
    <div className='title'>
      <h1>
       Filtro de Linha
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

export default FIltroDeLinha