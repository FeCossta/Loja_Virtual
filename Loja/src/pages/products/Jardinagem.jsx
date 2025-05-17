import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';



const products = [

    {
        id:132,
        name: 'MLY - 55CC',
        description: 'Motosserra',
        image: '../assets/Products/Hobby/hb13.jpg',
        link: '/equipamentos/motosserra-mly-55cc',
    },
    {
        id:133,
        name: 'PROFISSIONAL VR260H',
        description: 'ROCADEIRA LATERAL GASOLINA',
        image: '../assets/Products/Hobby/hb14.jpg',
        link: '/equipamentos/rocadeira-lateral-vr260h',
    },
    {
        id:134,
        name: 'PROFISSIONAL VR260P',
        description: 'ROCADEIRA LATERAL GASOLINA',
        image: '../assets/Products/Hobby/hb15.jpg',
        link: '/equipamentos/rocadeira-lateral-vr260p',
    },
    {
        id:135,
        name: 'PROFISSIONAL VR330H',
        description: 'ROCADEIRA LATERAL GASOLINA',
        image: '../assets/Products/Hobby/hb16.jpg',
        link: '/equipamentos/rocadeira-lateral-vr330h',
    },
    {
        id:136,
        name: 'PROFISSIONAL VR330P',
        description: 'ROCADEIRA LATERAL GASOLINA',
        image: '../assets/Products/Hobby/hb17.jpg',
        link: '/equipamentos/rocadeira-lateral-vr330p',
    },
    {
        id:137,
        name: 'CG-450',
        description: 'ROÇADEIRA LATERAL À COMBUSTÃO',
        image: '../assets/Products/Hobby/hb18.jpg',
        link: '/equipamentos/rocadeira-lateral-cg-450',
    },
    {
        id:138,
        name: 'CG-550',
        description: 'ROÇADEIRA LATERAL À COMBUSTÃO',
        image: '../assets/Products/Hobby/hb19.jpg',
        link: '/equipamentos/rocadeira-lateral-cg-550',
    },
    {
        id:139,
        name: 'CG-550-B',
        description: 'ROÇADEIRA LATERAL À COMBUSTÃO',
        image: '../assets/Products/Hobby/hb19.jpg',
        link: '/equipamentos/rocadeira-lateral-cg-550-b',
    }

]

const Jardinagem = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
        <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" alt="Logo Manuteec" /></a>
    </div>
    <MainMenu />
    <div className='title'>
        <h1>
            Equipamentos de Jardinagem
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

export default Jardinagem