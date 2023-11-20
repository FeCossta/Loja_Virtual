import React from 'react'
import Navbar from '../componentes/Navbar'
import MainMenu from '../componentes/MainMenu'
import Footer from '../componentes/Footer'



const products = [
    {
        id: 21,
        name: 'Material de pintura',
        description: 'Material de pintura',
        image: '../assets/Products/Hobby/hb2.png',
        link: '/hobby/material-de-pintura',
        type: 'Material de pintura'
    },
    {
        id: 22,
        name: 'Ferramentas Manuais',
        description: 'Ferramentas Manuais',
        image: '../assets/Products/Ferramentas/product2.jpg',
        link: '/ferramentas/manuais',
        type: 'Ferramentas Manuais'
    },
    

]



const HobbyPage = () => {
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

export default HobbyPage