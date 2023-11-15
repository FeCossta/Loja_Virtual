import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products = [
    {
        id: 99,
        name: 'CHAVE DE CATRACA 1/2" SCHULZ COMPACT - SFCC 70 ',
        description: 'Chave de Catraca',
        image: '../assets/Products/Ferramentas/fr1.jpg',
        link: '/ferramentas/chave-de-catraca-compact-sfcc70-12',
        type: 'Chave de Catraca'
    },
    {
        id: 100,
        name: 'CHAVE DE IMPACTO 1/2" SCHULZ COMPACT - SFIC 480 ',
        description: 'Chave de Impacto',
        image: '../assets/Products/Ferramentas/fr2.jpg',
        link: '/ferramentas/chave-de-impacto-sfic480-12',
        type: 'Chave de Impacto'
    },
    {
        id: 101,
        name: 'DESINCRUSTADOR DE AGULHAS HD SCHULZ - SFP 32 ',
        description: 'Desincrustador',
        image: '../assets/Products/Ferramentas/fr3.jpg',
        link: '/ferramentas/desincrustador-sfp32',
        type: 'Desincrustador'
    },
    
    {
        id: 102,
        name: 'ESMERILHADEIRA ANGULAR 5" SCHULZ COMPACT - SFDC 11 ',
        description: 'Esmerilhadeira Angular',
        image: '../assets/Products/Ferramentas/fr4.jpg',
        link: '/ferramentas/esmerilhadeira-angular-compact-sfdc11',
        type: 'Esmerilhadeira Angular'
    },
]




const Pneumatics = () => {
    return (
      <>
        <Navbar />
        <div className='logo'>
          <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" alt="Logo Manuteec" /></a>
        </div>
        <MainMenu />
        <div className='title'>
          <h1>
            Ferramentas Pneumaticas
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
  
        <div className="more">
          <h3>
            Se você procura outras ferramentas pneumáticas, entre em contato conosco. Temos uma enorme variedade de produtos das marcas às quais somos revendedores.
          </h3>
        </div>
        <Footer />
      </>
    )
  }
  

export default Pneumatics