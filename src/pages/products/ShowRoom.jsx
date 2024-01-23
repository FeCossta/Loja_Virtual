import React from 'react'
import Navbar from '../../componentes/Navbar';
import MainMenu from '../../componentes/MainMenu';
import Footer from '../../componentes/Footer';
import './ShowRoom.css';
import Sidebar from '../../componentes/SideBar';

const products = [
  {
    id: 1,
    name: 'FORT MSWV 60 / 425',
    description: 'COMPRESSOR DE AR DE PISTÃO - MOTOR ABERTO ',
    image: '../assets/Products/Compressores/pistao/pist1.jpg',
    link: '/compressores/fortmsw60425',

  },

  {
    id: 2,
    name: 'CSV 20/150',
    description: 'COMPRESSOR DE AR DE PISTÃO',
    image: '../assets/Products/Compressores/pistao/pist2.jpg',
    link: '/compressores/max2050',

  },

  {
    id: 7,
    name: 'BRAVO CSL 10 BR / 100',
    description: 'COMPRESSOR DE AR DE PISTÃO',
    image: '../assets/Products/Compressores/pistao/pist7.jpg',
    link: '/compressores/bravocsl10br100',

  },

  {
    id: 13,
    name: 'SRP 4015E TS FLEX',
    description: 'COMPRESSOR DE AR DE PARAFUSO - COM RESERVATÓRIO',
    image: '../assets/Products/Compressores/pistao/pist13.jpg',
    link: '/compressores/srp4015ts',
  },
  {
    id: 14,
    name: 'SRP 4050E FLEX ADS',
    description: 'COMPRESSOR DE AR DE PARAFUSO',
    image: '../assets/Products/Compressores/pistao/pist14.jpg',
    link: '/compressores/srp4050flexads',
  },
  {
    id: 15,
    name: 'SRP 4100E AD FLEX',
    description: 'COMPRESSOR DE AR DE PARAFUSO',
    image: '../assets/Products/Compressores/pistao/pist15.jpg',
    link: '/compressores/srp4100adflex',
  },


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
    id: 150,
    name: 'WAP GTW 20',
    description: 'Aspiradores',
    image: '../assets/Products/Equipamentos/eq35.png',
    link: '/equipamentos/wap-gtw-20',
    type: 'Aspiradores'
  },

  {
    id: 43,
    name: 'SDS 120',
    description: 'SECADORAS DE AR SCHULZ',
    image: '../assets/Products/Tratamento/trat1.jpg',
    link: '/tratamento/sds120',
  },
  {
    id: 44,
    name: 'SDS 160',
    description: 'SECADORAS DE AR SCHULZ',
    image: '../assets/Products/Tratamento/trat2.jpg',
    link: '/tratamento/sds160',
  },

  {
    id: 110,
    name: 'SERRA TICO TICO WAP ESTT 550',
    description: 'Serra tico tico',
    image: '../assets/Products/Ferramentas/fr12.png',
    link: '/ferramentas/tico-tico-wap-estt550',
    type: 'Ferramenta Elétrica'
  },
  {
    id: 111,
    name: 'SERRA TICO TICO WAP ESTT 800',
    description: 'Serra Tico Tico',
    image: '../assets/Products/Ferramentas/fr13.png',
    link: '/ferramentas/tico-tico-wap-estt800',
    type: 'Serra Tico Tico'
  },

  {
    id: 120,
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

]







const ShowRoom = () => {
  return (
    <>


      <div className='title'>


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

    </>
  )
}

export default ShowRoom