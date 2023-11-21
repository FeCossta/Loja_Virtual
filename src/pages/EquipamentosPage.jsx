import React from 'react'

import Navbar from '../componentes/Navbar'
import MainMenu from '../componentes/MainMenu'
import Footer from '../componentes/Footer'




const products = [
    {
        id: 10,
        name: 'Geradores de energia',
        description: 'Geradores de energia',
        image: './assets/Products/Equipamentos/eq4.jpg',
        link: '/equipamentos/geradores-de-energia',
        type: 'Geradores de Energia'
    },

    {
        id: 11,
        name: 'Aspiradores',
        description: 'Aspirador',
        image: './assets/Products/Equipamentos/eq8.jpg',
        link: '/equipamentos/aspiradores',
        type: 'Aspiradores'
    },

    {
        id: 12,
        name: 'Máquinas de Solda',
        description: 'Inversoras de Solda',
        image: './assets/Products/Equipamentos/eq11.jpg',
        link: '/equipamentos/maquinas-de-solda',
        type: 'Equipamentos de Solda'
    },

    {
        id: 13,
        name: 'Motor a Combustão',
        description: 'Motor a Combustão',
        image: './assets/Products/Equipamentos/eq15.jpg',
        link: '/equipamentos/motores-a-combustao',
        type: 'Motores a Combustão'
    },
    {
        id: 14,
        name: 'Carretel Retrátil ',
        description: 'Carretel Retrátil',
        image: './assets/Products/Equipamentos/eq19.jpg',
        link: '/equipamentos/carreteis',
        type: 'Carretéis'
    },
    {
        id: 15,
        name: 'Lavadoras',
        description: 'Lavadoras',
        image: './assets/Products/Equipamentos/eq25.png',
        link: '/equipamentos/lavadoras',
        type: 'Lavadoras'
    },
    
    {
        id: 22,
        name: 'Jardinagem',
        description: 'Equipamentos de Jardinagem',
        image: './assets/Products/Hobby/hb13.jpg',
        link: '/equipamentos/equipamentos-de-jardinagem',
        type: 'Equipamentos de Jardinagem'
    },
];







const EquipamentosPage = () => {
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

export default EquipamentosPage