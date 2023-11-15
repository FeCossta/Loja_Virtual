import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';



const products = [
    {
        id: 78,
        name: 'WAP ÁGIL 1800',
        description: 'Lavadora de alta pressão',
        image: '../assets/Products/Equipamentos/eq20.png',
        link: '/equipamentos/wap-1800-agil',
        type: 'Uso Ocasional'
    },
    {
        id: 79,
        name: 'WAP OUSADA PLUS 2200',
        description: 'Lavadora de alta pressão',
        image: '../assets/Products/Equipamentos/eq21.png',
        link: '/equipamentos/wap-ousada-plus-2200',
        type: 'Uso Ocasional'
    },
    {
        id: 80,
        name: 'WAP ATACAMA SMART 2200',
        description: 'Lavadora de alta pressão',
        image: '../assets/Products/Equipamentos/eq22.png',
        link: '/equipamentos/wap-atacama-smart-2200',
        type: 'Uso Ocasional'
    },
    {
        id: 81,
        name: 'WAP EXTREME TURBO 2800',
        description: 'Lavadora de alta pressão',
        image: '../assets/Products/Equipamentos/eq23.png',
        link: '/equipamentos/wap-extreme-turbo-2800',
        type: 'Uso Semi - Intensivo'
    },
    {
        id: 82,
        name: 'WAP PREMIUM 2600',
        description: 'Lavadora de alta pressão',
        image: '../assets/Products/Equipamentos/eq24.png',
        link: '/equipamentos/wap-premium-2600',
        type: 'Uso Semi - Intensivo'
    },
    {
        id: 83,
        name: ' WAP COMBATE TURBO 2600',
        description: 'Lavadora de alta pressão',
        image: '../assets/Products/Equipamentos/eq25.png',
        link: '/equipamentos/wap-combate-turbo-2600',
        type: 'Uso Semi - Intensivo'
    },
    {
        id: 84,
        name: 'WAP 4100 TURBO',
        description: 'Lavadora de alta pressão',
        image: '../assets/Products/Equipamentos/eq26.png',
        link: '/equipamentos/wap-4100-turbo',
        type: 'Uso Intensivo'
    },
    {
        id: 85,
        name: 'WAP L PROFI 4000 - 380V TRI',
        description: 'Lavadora de alta pressão',
        image: '../assets/Products/Equipamentos/eq27.png',
        link: '/equipamentos/wap-lprof-4000',
        type: 'Uso Intensivo'
    },
    {
        id: 86,
        name: 'WAP L PROFI 2000 - 220V',
        description: 'Lavadora de alta pressão',
        image: '../assets/Products/Equipamentos/eq28.png',
        link: '/equipamentos/wap-lprof-2000',
        type: 'Uso Intensivo'
    },

]






const Lavadoras = () => {
    return (
        <>
            <Navbar />
            <div className='logo'>
                <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" /> </a>
            </div>
            <MainMenu />
            <div className='title'>
                <h1>
                    Lavadoras de alta pressão
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

export default Lavadoras