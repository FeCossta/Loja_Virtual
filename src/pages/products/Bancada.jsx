import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products = [
    {
        id: 107,
        name: 'FURADEIRA DE COLUNA FSC 32 P PRATIKA',
        description: 'Ferramenta de Coluna',
        image: '../assets/Products/Ferramentas/fr9.jpg',
        link: '/ferramentas/furadeira-de-coluna-fsc-32',
        type: 'Ferramenta de Coluna'
    },
    {
        id:108,
        name: 'FURADEIRA DE BANCADA FSB16 TORK SCHULZ',
        description: 'Furadeira de Bancada',
        image: '../assets/Products/Ferramentas/fr10.jpg',
        link: 'furadeira-de-bancada-fsb16',
        type: 'Furadeira de Bancada'
    },
    {
        id:109,
        name: 'FERRAMENTA FURADEIRA DE BANCADA FSB 13 P PRATIKA ',
        description: 'Furadeira de bancada',
        image: '../assets/Products/Ferramentas/fr11.jpg',
        link: '/ferramentas/furadeira-de-bancada-fsb-13-pratika',
        type: 'Furadeira de bancada'
    },


]

const Bancada = () => {
  return (
    <>
            <Navbar />
            <div className='logo'>
                <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" alt="Logo Manuteec" /></a>
            </div>
            <MainMenu />
            <div className='title'>
                <h1>
                    Ferramentas De Coluna e Bancada
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

export default Bancada