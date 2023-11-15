import React from 'react'
import Navbar from '../componentes/Navbar'
import MainMenu from '../componentes/MainMenu'
import Footer from '../componentes/Footer'


const products = [
    {
        id: 87,
        name: 'KIT MANUTENÇÃO PREVENTIVA PARA COMPRESSOR PARAFUSO SRP 2010 ',
        description: 'Kit de manutenção preventiva',
        image: './assets/Products/Kit/k1.jpg',
        link: '/manutencao-preventiva/srp-2010',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 88,
        name: 'Kit manutenção preventiva para compressor parafuso SRP 2015 ',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k2.jpg',
        link: '/manutencao-preventiva/srp-2015',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 89,
        name: 'Kit manutenção preventiva para compressor parafuso SRP 2030 ',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k3.jpg',
        link: '/manutencao-preventiva/srp-2030',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 90,
        name: ' Kit manutenção preventiva para compressor parafuso SRP 2040',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k4.jpg',
        link: '/manutencao-preventiva/srp-2040',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 91,
        name: 'Kit manutenção preventiva para compressor parafuso SRP 2060 ',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k5.jpg',
        link: '/manutencao-preventiva/srp-2060',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 92,
        name: 'Kit manutenção preventiva para compressor parafuso SRP 3030 ',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k6.jpg',
        link: '/manutencao-preventiva/srp-3030',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 93,
        name: 'Kit manutenção preventiva para compressor parafuso SRP 3040 ',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k7.jpg',
        link: '/manutencao-preventiva/srp-3040',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 94,
        name: 'Kit manutenção preventiva para compressor parafuso SRP 3050 ',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k8.jpg',
        link: '/manutencao-preventiva/srp-3050',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 95,
        name: ' Kit manutenção preventiva para compressor parafuso SRP 3060',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k9.jpg',
        link: '/manutencao-preventiva/srp-3060',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 96,
        name: ' Kit manutenção preventiva para compressor parafuso SRP 3075',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k10.jpg',
        link: '/manutencao-preventiva/srp-3075',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 97,
        name: ' Kit manutenção preventiva para compressor parafuso SRP 3100',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k11.jpg',
        link: '/manutencao-preventiva/srp-3100',
        type: 'Kit de manutenção preventiva'
    },
    {
        id: 98,
        name: 'Kit manutenção preventiva para compressor parafuso SRP 4005E ',
        description: 'Kit de manutenção preventiva ',
        image: './assets/Products/Kit/k12.jpg',
        link: '/manutencao-preventiva/srp-4005e',
        type: 'Kit de manutenção preventiva'
    },
];







const PreventivePage = () => {
    return (
        <>
            <Navbar />
            <div className='logo'>
                <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" /> </a>
            </div>
            <MainMenu />
            <div className='title'>
                <h1>
                    Kits para manutenção preventiva
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

export default PreventivePage