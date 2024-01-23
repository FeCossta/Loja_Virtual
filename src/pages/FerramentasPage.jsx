import React from 'react'
import Navbar from '../componentes/Navbar'
import MainMenu from '../componentes/MainMenu'
import Footer from '../componentes/Footer'



const products = [
    {
        id: 16,
        name: 'Ferramentas Pneumaticas',
        description: 'Ferramentas Pneumaticas',
        image: '../assets/Products/Ferramentas/product1.jpg',
        link: '/ferramentas/pneumaticas',
        type: 'Ferramentas Pneumaticas'
    },
    {
        id: 17,
        name: 'Ferramentas Manuais',
        description: 'Ferramentas Manuais',
        image: '../assets/Products/Ferramentas/product2.jpg',
        link: '/ferramentas/manuais',
        type: 'Ferramentas Manuais'
    },
    {
        id: 18,
        name: 'Ferramentas De Bancada e Coluna',
        description: 'Ferramentas De Bancada e Coluna',
        image: '../assets/Products/Ferramentas/product3.jpg',
        link: '/ferramentas/bancada-e-coluna',
        type: 'Ferramentas De Bancada e Coluna'
    },
    {
        id: 19,
        name: 'Ferramentas Elétricas',
        description: 'Ferramentas Elétricas',
        image: '../assets/Products/Ferramentas/product4.jpg',
        link: '/ferramentas/eletricas',
        type: 'Ferramentas Elétricas'
    },
    {
        id: 20,
        name: 'Ferramentas De Bateria',
        description: 'Ferramentas De Bateria',
        image: '../assets/Products/Ferramentas/product5.png',
        link: '/ferramentas/ferramentas-de-baterias',
        type: 'Ferramentas De Bateria'
    },
    {
        id: 21,
        name: 'Material de pintura',
        description: 'Material de pintura',
        image: '../assets/Products/Hobby/hb2.png',
        link: '/ferramentas/ferramentas-de-pintura',
        type: 'Material de pintura'
    },

]





const FerramentasPage = () => {
    return (
        <>
            <Navbar />
            <div className='logo'>
                <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" /> </a>
            </div>
            <MainMenu />
            <div className="main">
                <div className="compressors-page">
                    {products.map((product) => (
                        <a key={product.id} href={product.link} className="product">
                            <img src={product.image} alt={product.name} />
                            <h3 className='product-name1'>{product.name}</h3>

                            <p className='pLink'>Ver Mais {product.type}</p>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FerramentasPage