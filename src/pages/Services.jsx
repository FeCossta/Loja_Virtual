// Services.js
import React, { useState } from 'react';
import './Services.css';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import MainMenu from '../componentes/MainMenu';

const Services = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState({
        title: '',
        description: '',
        entryRequirements: '',
        terms: '',
    });

    const openModal = (service) => {

        if (service === 'Serviços em Garantia') {
            setSelectedService({
                title: 'Serviços em Garantia',
                description: 'Serviços em garantia para as marcas parceiras.',
                entryRequirements: 'É necessário que o equipamento esteja com todos os seus acessórios, o produto deve estar dentro do prazo de garantia estabelecido pelo FABRICANTE e estar portando a Nota Fiscal',
                terms: 'O prazo legal para devolução do equipamento é de até 30 dias corridos.'
            });
        } else if (service === 'Serviços Técnicos Fora da Garantia') {
            setSelectedService({
                title: 'Serviços Técnicos Fora da Garantia',
                terms: 'Após a avaliação do equipamento, estaremos gerando um orçamento para manutenção do mesmo, somente em caso de aprovação do orçamento, será abatido a taxa cobrada na avaliação',
                description: 'É cobrado uma taxa de avaliação, temos um prazo legal de 30 dias corridos para devolução do equipamento.',

            });
        }

        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Navbar />
            <div className='logo'>
                <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" /> </a>
            </div>
            <MainMenu />

            <div className="services-container">
                <div className="service-block" onClick={() => openModal('Serviços em Garantia')}>
                    <h2>Serviços em Garantia</h2>
                </div>

                <div className="service-block" onClick={() => openModal('Serviços Técnicos Fora da Garantia')}>
                    <h2>Serviços Técnicos Fora da Garantia</h2>
                </div>
            </div>

            {isModalOpen && (
                <div className="service-mod" onClick={closeModal}>
                    <div className="service-mod-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedService.title}</h2>
                        <p>{selectedService.description}</p>
                        <p>{selectedService.terms}</p>
                        <p>{selectedService.entryRequirements}</p>
                        <button onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Services;
