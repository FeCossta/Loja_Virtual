import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products = [
    {
        id: 110,
        name: 'SERRA TICO TICO WAP ESTT 550',
        description: 'Serra tico tico',
        image: '../assets/Products/Ferramentas/fr12.png',
        link: '/ferramentas/tico-tico-wap-estt550',
        type: 'Ferramenta Elétrica'
    },
    {
        id:111,
        name: 'SERRA TICO TICO WAP ESTT 800',
        description: 'Serra Tico Tico',
        image: '../assets/Products/Ferramentas/fr13.png',
        link: '/ferramentas/tico-tico-wap-estt800',
        type: 'Serra Tico Tico'
    },
    {
        id:112,
        name: 'FURADEIRA DE IMPACTO 1/2\" 500W PLUS SCHULZ ',
        description: 'Furadeira de Impacto',
        image: '../assets/Products/Ferramentas/fr14.jpg',
        link: '/ferramentas/furadeira-de-impacto-500w-plus',
        type: 'Furadeira de Impacto'
    },
    {
        id:113,
        name: 'LIXADEIRA ORBITAL 135 W SCHULZ ',
        description: 'Lixadeira Orbital',
        image: '../assets/Products/Ferramentas/fr15.jpg',
        link: '/ferramentas/lixadeira-orbital-135w',
        type: 'Lixadeira Orbital'
    },


]




const Eletricas = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
        <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" alt="Logo Manuteec" /></a>
    </div>
    <MainMenu />
    <div className='title'>
        <h1>
            Ferramentas Elétricas
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

export default Eletricas