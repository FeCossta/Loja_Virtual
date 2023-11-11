import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products = [
    {
        id: 59,
        name: 'S1200 MG',
        description: 'Gerador de Energia',
        image: '../assets/Products/Equipamentos/eq1.jpg',
        link: '/equipamentos/s1200mg',
        type: 'Geradores de Energia'
    },

    {
        id: 60,
        name: 'S12000 MG',
        description: 'Gerador de Energia',
        image: '../assets/Products/Equipamentos/eq2.jpg',
        link: '/equipamentos/s12000mg',
        type: 'Geradores de Energia'
    },

    {
        id: 61,
        name: ' S13000 TD',
        description: 'Gerador de Energia',
        image: '../assets/Products/Equipamentos/eq3.jpg',
        link: '/equipamentos/s13000td',
        type: 'Geradores de Energia'
    },
    {
        id: 62,
        name: ' S3500 MG ',
        description: 'Gerador de Energia',
        image: '../assets/Products/Equipamentos/eq4.jpg',
        link: '/equipamentos/s3500mg',
        type: 'Geradores de Energia'
    },
    {
        id: 63,
        name: 'S5000 TD ',
        description: 'Gerador de Energia',
        image: '../assets/Products/Equipamentos/eq5.jpg',
        link: '/equipamentos/s5000td',
        type: 'Geradores de Energia'
    },
    {
        id: 64,
        name: ' S5500 MG',
        description: 'Gerador de Energia',
        image: '../assets/Products/Equipamentos/eq6.jpg',
        link: '/equipamentos/s5500mg',
        type: 'Geradores de Energia'
    },
    {
        id: 65,
        name: 'S950 MG',
        description: 'Gerador de Energia',
        image: '../assets/Products/Equipamentos/eq7.jpg',
        link: '/equipamentos/s950mg',
        type: 'Geradores de Energia'
    },

]










const Geradores = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
    <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
    </div>
    <MainMenu />
    <div className='title'>
      <h1>
       Geradores de Energia
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

export default Geradores