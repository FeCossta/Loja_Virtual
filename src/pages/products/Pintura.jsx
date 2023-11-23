import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';


const products = [

    {
        id:120,
        name: 'PPL-350',
        description: 'PISTOLA PULVERIZADORA',
        image: '../assets/Products/Hobby/hb1.jpg',
        link: '/ferramentas/pistola-ppl-350',
    },
    {
        id: 121,
        name: 'LPA-1000',
        description: 'MÁQUINA DE PINTURA AIRLESS',
        image: '../assets/Products/Hobby/hb2.png',
        link: '/ferramentas/maquina-pintura-lpa-1000',
    },
    {
        id: 122,
        name: 'LPA-650',
        description: 'MÁQUINA DE PINTURA AIRLESS',
        image: '../assets/Products/Hobby/hb3.jpg',
        link: '/ferramentas/maquina-pintura-lpa-650',
    },
    {
        id: 123,
        name: 'PPL-500',
        description: 'PISTOLA PULVERIZADORA',
        image: '../assets/Products/Hobby/hb4.png',
        link: '/ferramentas/pistola-ppl-500',
    },
    {
        id: 124,
        name: 'PPL-750',
        description: 'PISTOLA PULVERIZADORA',
        image: '../assets/Products/Hobby/hb5.jpg',
        link: '/ferramentas/pistola-ppl-750',
    },
    {
        id: 125,
        name: 'AIR PLUS SPRAY - 700W',
        description: 'PISTOLA PULVERIZADORA',
        image: '../assets/Products/Hobby/hb6.jpg',
        link: '/ferramentas/air-plus-spray-700w',
    },
    {
        id: 126,
        name: 'MTL-1400',
        description: 'MISTURADOR DE TINTA E ARGAMASSA',
        image: '../assets/Products/Hobby/hb7.jpg',
        link: '/ferramentas/mtl-1400',
    },
    {
        id: 127,
        name: 'LPLA-750',
        description: 'LIXADEIRA PAREDE LED COM ASPIRAÇÃO',
        image: '../assets/Products/Hobby/hb8.jpg',
        link: '/ferramentas/lixadeira-de-parede-com-aspiracao',
    },
    {
        id: 128,
        name: 'MTL-850',
        description: 'MISTURADOR DE TINTA E ARGAMASSA',
        image: '../assets/Products/Hobby/hb9.jpg',
        link: '/ferramentas/mtl-850',
    },
    {
        id: 129,
        name: 'LPL-850',
        description: 'LIXADEIRA PAREDE LED COM ASPIRAÇÃO',
        image: '../assets/Products/Hobby/hb10.png',
        link: '/ferramentas/lixadeira-de-parede-com-aspiracao-lpl850',
    },
    {
        id: 130,
        name: 'DL-6000',
        description: 'DESEMPENADEIRA LYNUS',
        image: '../assets/Products/Hobby/hb11.jpg',
        link: '/ferramentas/desempenadeira-dl6000',
    },
    {
        id: 131,
        name: 'DL-2500',
        description: 'DESEMPENADEIRA LYNUS',
        image: '../assets/Products/Hobby/hb12.jpg',
        link: '/ferramentas/desempenadeira-dl2500',
    },
    

]






const Pintura = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
        <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" alt="Logo Manuteec" /></a>
    </div>
    <MainMenu />
    <div className='title'>
        <h1>
            Materiais de Pintura
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

export default Pintura