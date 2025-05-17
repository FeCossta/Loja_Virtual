import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';




const products = [
    {
        id: 77,
        name: 'CARRETEL RETRÁTIL COM MANGUEIRA DE AR 15 METROS',
        description: 'Carretel Retratil',
        image: '../assets/Products/Equipamentos/eq19.jpg',
        link: '/equipamentos/carretel-15m',
        type: 'Carretel Retratil'
    },

]




const Carretel = () => {
    return (
        <>
            <Navbar />
            <div className='logo'>
                <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" /> </a>
            </div>
            <MainMenu />
            <div className='title'>
                <h1>
                    Motores a Combustão
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

export default Carretel