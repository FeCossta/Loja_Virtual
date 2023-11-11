import React from 'react'
import './TratamentoPage.css'
import Navbar from '../componentes/Navbar'
import MainMenu from '../componentes/MainMenu'
import Footer from '../componentes/Footer'




const products = [
    {
        id: 5,
        name: 'SECADORAS ',
        description: 'SECADORES DE AR',
        image: './assets/Products/Tratamento/trat4.jpg',
        link: '/tratamento/secadoras',
        type: 'Secadoras'
    },

    {
        id: 6,
        name: 'SEPARADORES DE ÁGUA E ÓLEO ',
        description: 'SEPARADORES DE ÁGUA E ÓLEO', 
        image: './assets/Products/Tratamento/product2.jpg',
        link: '/error',
        type: 'Separador agua e oleo'
    },

    {
        id: 7,
        name: 'SEPARADORES DE CONDENSADO ',
        description: 'SEPARADORES DE CONDENSADO ', 
        image: './assets/Products/Tratamento/product3.jpg',
        link: '/error',
        type: 'Separadores de condensado'
    },

    {
        id: 8,
        name: 'PURGADORES ELETRÓNICOS',
        description: 'PURGADORES ELETRÓNICOS ', 
        image: './assets/Products/Tratamento/product4.jpg',
        link: '/error',
        type: 'Purgadores eletrónicos'
    },

    {
        id: 9,
        name: 'FILTROS DE LINHA',
        description: 'FILTROS DE LINHA', 
        image: './assets/Products/Tratamento/product5.jpg',
        link: '/error',
        type: 'Filtros de linha'
    },
];



const TratamentoPage = () => {
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
                            <h3>{product.name}</h3>

                            <p className='pLink'>Ver Mais {product.type}</p>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TratamentoPage