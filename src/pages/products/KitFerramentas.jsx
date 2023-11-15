import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products = [
    {
        id: 103,
        name: 'KIT DE FERRAMENTAS SCHULZ 40 PEÇAS',
        description: 'Kit De Ferramentas',
        image: '../assets/Products/Ferramentas/fr5.jpg',
        link: '/ferramentas/kit-de-ferramentas-40-pecas',
        type: 'Kit De Ferramentas'
    },
    {
        id: 104,
        name: 'KIT DE FERRAMENTAS SCHULZ 57 PEÇAS',
        description: 'Kit de Ferramentas Schulz com 57 peças.',
        image: '../assets/Products/Ferramentas/fr6.jpg',
        link: '/ferramentas/kit-de-ferramentas-57-pecas',
        type: 'Kit de Ferramentas'
    },
    {
        id: 105,
        name: 'KIT DE FERRAMENTAS SCHULZ 100 PEÇAS',
        description: 'Kit de Ferramentas Schulz com 100 peças.',
        image: '../assets/Products/Ferramentas/fr7.jpg',
        link: '/ferramentas/kit-de-ferramentas-100-pecas',
        type: 'Kit de Ferramentas'
    },
    {
        id: 106,
        name: 'KIT RESIDENCIAL SCHULZ',
        description: 'Kit Residencial Schulz. ',
        image: '../assets/Products/Ferramentas/fr8.jpg',
        link: '/ferramentas/kit-residencial',
        type: 'Kit Residencial'
    }
];







const KitFerramentas = () => {
    return (
        <>
            <Navbar />
            <div className='logo'>
                <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" alt="Logo Manuteec" /></a>
            </div>
            <MainMenu />
            <div className='title'>
                <h1>
                    Ferramentas Manuais
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

export default KitFerramentas