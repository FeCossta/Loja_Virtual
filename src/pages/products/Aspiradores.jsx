import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products = [
    {
        id:66,
        name: ' HIDROPÓ SCHULZ 1200 W',
        description: 'Aspiradores',
        image: '../assets/Products/Equipamentos/eq8.jpg',
        link: '/equipamentos/hidropo-schulz-1200w',
        type: 'Aspiradores'
    },
    {
        id:67,
        name: 'HIDROPÓ SCHULZ 2000 W ',
        description: 'Aspiradores',
        image: '../assets/Products/Equipamentos/eq9.jpg',
        link: '/equipamentos/hidropo-schulz-2000w',
        type: 'Aspiradores'
    },
    {
        id:68,
        name: 'SACO COLETOR PARA PÓ EM TECIDO SCHULZ ',
        description: 'Aspiradores',
        image: '../assets/Products/Equipamentos/eq10.jpg',
        link: '/equipamentos/saco-coletor',
        type: 'Aspiradores'
    },

]




const Aspiradores = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
    <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png"/> </a>
    </div>
    <MainMenu />
    <div className='title'>
      <h1>
       Aspiradores
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

export default Aspiradores