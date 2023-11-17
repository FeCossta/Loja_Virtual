import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';




const products = [

    {
        id:114,
        name: 'PARAFUSADEIRA E FURADEIRA DE IMPACTO 21V WAP K21 ID03 ',
        description: 'Parafusadeira e Furadeira',
        image: '../assets/Products/Ferramentas/fr16.png',
        link: '/ferramentas/wap-k21-id03',
    },
    {
        id:115,
        name: 'PARAFUSADEIRA E FURADEIRA A BATERIA 12V WAP BPF 12K2 LI-ION ',
        description: 'Parafusadeira e Furadeira',
        image: '../assets/Products/Ferramentas/fr17.png',
        link: '/ferramentas/wap-bpf-12k2-li-ion',
    },
    {
        id:116,
        name: 'PARAFUSADEIRA E FURADEIRA DE IMPACTO 21V WAP K21 ID01',
        description: 'Parafusadeira e Furadeira de Impacto',
        image: '../assets/Products/Ferramentas/fr18.png',
        link: '/ferramentas/wap-k21-id01',
    },
    {
        id:117,
        name: 'PARAFUSADEIRA E FURADEIRA A BATERIA 12V WAP BPF 12K3 LI-ION',
        description: 'Parafusadeira e Furadeira',
        image: '../assets/Products/Ferramentas/fr19.png',
        link: '/ferramentas/wap-bpf-12k3-li-ion',
    },
    {
        id:118,
        name: 'PFL-12CI - PARAFUSADEIRA COM IMPACTO',
        description: 'Parafusadeira com Impacto',
        image: '../assets/Products/Ferramentas/fr20.jpg',
        link: '/ferramentas/pfl-12ci-parafusadeira-com-impacto',
    },
    {
        id:119,
        name: 'PFL-12 - PARAFUSADEIRA SEM MALETA',
        description: 'Parafusadeira',
        image: '../assets/Products/Ferramentas/fr21.jpg',
        link: '/ferramentas/pfl-12-parafusadeira-sem-maleta',
    },

]


const Baterias = () => {
  return (
    <>
    <Navbar />
    <div className='logo'>
        <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" alt="Logo Manuteec" /></a>
    </div>
    <MainMenu />
    <div className='title'>
        <h1>
            Ferramentas a Bateria
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

export default Baterias