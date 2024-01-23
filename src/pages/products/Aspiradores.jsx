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
    {
      id:144,
      name: 'WAP GTW INOX 15',
      description: 'Aspiradores',
      image: '../assets/Products/Equipamentos/eq29.png',
      link: '/equipamentos/wap-gtw-inox-15',
      type: 'Aspiradores'
    },
    {
      id:145,
      name: 'WAP GTW INOX 20',
      description: 'Aspiradores',
      image: '../assets/Products/Equipamentos/eq30.png',
      link: '/equipamentos/wap-gtw-inox-20',
      type: 'Aspiradores'
    },
    {
      id:146,
      name: 'WAP GTW INOX 12',
      description: 'Aspiradores',
      image: '../assets/Products/Equipamentos/eq31.png',
      link: '/equipamentos/wap-gtw-inox-12',
      type: 'Aspiradores'
    },
    {
      id:147,
      name: 'WAP GTW INOX 50',
      description: 'Aspiradores',
      image: '../assets/Products/Equipamentos/eq32.png',
      link: '/equipamentos/wap-gtw-inox-50',
      type: 'Aspiradores'
    },
    {
      id:148,
      name: 'WAP GTW INOX 70 DUO',
      description: 'Aspiradores',
      image: '../assets/Products/Equipamentos/eq33.png',
      link: '/equipamentos/wap-gtw-inox-70-duo',
      type: 'Aspiradores'
    },
    {
      id:149,
      name: 'WAP GTW 55',
      description: 'Aspiradores',
      image: '../assets/Products/Equipamentos/eq34.png',
      link: '/equipamentos/wap-gtw-55',
      type: 'Aspiradores'
    },
    {
      id:150,
      name: 'WAP GTW 20',
      description: 'Aspiradores',
      image: '../assets/Products/Equipamentos/eq35.png',
      link: '/equipamentos/wap-gtw-20',
      type: 'Aspiradores'
    }

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

export default Aspiradores