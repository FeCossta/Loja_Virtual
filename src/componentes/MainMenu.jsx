import React, { useState, useEffect } from 'react';
import './MainMenu.css';
import { FaHome } from 'react-icons/fa';

function MainMenu() {
    const [isSticky, setSticky] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setMobileMenuOpen(false);
      };
    
      const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
      };

    return (

        <>

           <div className='mobile-menu'>
            
           <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                    Produtos
                </div>
                
                <div className="mobile-menu-options">
                    <a href="/compressores" onClick={() => handleOptionClick('compressores')}>
                        Compressores
                    </a>
                    <a href="/tratamento" onClick={() => handleOptionClick('tratamento')}>
                        Tratamento de ar
                    </a>
                    <a href="/manutencao-preventiva" onClick={() => handleOptionClick('manutencao-preventiva')}>
                        Preventiva
                    </a>
                    <a href="/ferramentas" onClick={() => handleOptionClick('ferramentas')}>
                       Ferramentas
                    </a>
                    
                </div>
            </div>
           </div>

            <div className={`main-menu ${isSticky ? 'sticky' : ''}`}>
                <ul>


                    <li className='home'>
                        <a aria-label="Home Button" href="/"><FaHome /></a>
                    </li>

                    <li className={`menu-item ${selectedOption === 'compressores' ? 'active' : ''}`}>
                        <img src="https://testifying-8nzh09jmn-fe-costa.vercel.app/assets/menu/compressor.png" alt='Compressores' className="icon" />
                        <a href="/compressores" className='compress'>
                            <span className="text">Compressores</span>
                        </a>
                        <div className="compressors-menu">
                            <a href="/compressores/parafuso" onClick={() => handleOptionClick('parafuso')}>
                                Compressores Parafuso
                            </a>
                            <a href="/compressores/pistao" onClick={() => handleOptionClick('pistao')}>
                                Compressores Pistão
                            </a>
                            <a href="/compressores/jet" onClick={() => handleOptionClick('hobby')}>
                                Compressores Ar Direto
                            </a>
                            <a href="/compressores/isento" onClick={() => handleOptionClick('odontologicos')}>
                                Compressores Isento de óleo
                            </a>
                        </div>
                    </li>

                    <li className={`menu-item ${selectedOption === 'tratamento' ? 'active' : ''}`}>
                        <img src="https://testifying-8nzh09jmn-fe-costa.vercel.app/assets/menu/ar.png" alt='Tratamento de ar' className="icon" />
                        <a href="/tratamento" className='compress'>
                            <span className="text">Tratamento de ar</span>
                        </a>
                        <div className="compressors-menu">
                            <a href="/tratamento/secadoras" onClick={() => handleOptionClick('secadoras')}>
                                Secadoras de Ar
                            </a>
                            <a href="/tratamento/separador-de-agua-e-oleo" onClick={() => handleOptionClick('separador')}>
                                Separadores de Água e Óleo
                            </a>

                            <a href="/tratamento/purgador-eletronico" onClick={() => handleOptionClick('purgadores')}>
                                Purgadores Eletrónicos
                            </a>
                            <a href="/tratamento/filtro-de-linha" onClick={() => handleOptionClick('filtros')}>
                                Filtros de linha
                            </a>
                        </div>
                    </li>

                    <li className={`menu-item ${selectedOption === 'equipamentos' ? 'active' : ''}`}>
                        <img src="https://testifying-8nzh09jmn-fe-costa.vercel.app/assets/menu/equip.png" alt='Equipamentos' className="iconEquip" />
                        <a href="/equipamentos" className='compress'>
                            <span className="text">Equipamentos</span>
                        </a>
                        <div className="compressors-menu">
                            <a href="/equipamentos/geradores-de-energia" onClick={() => handleOptionClick('geradores')}>
                                Geradores de Energia
                            </a>
                            <a href="/equipamentos/aspiradores" onClick={() => handleOptionClick('aspiradores')}>
                                Aspiradores
                            </a>
                            <a href="/equipamentos/maquinas-de-solda" onClick={() => handleOptionClick('maquinas-solda')}>
                                Máquinas de Solda
                            </a>
                            <a href="/equipamentos/motores-a-combustao" onClick={() => handleOptionClick('motor-combustao')}>
                                Motor a Combustão
                            </a>
                            <a href="/equipamentos/carreteis" onClick={() => handleOptionClick('carretel-retratil')}>
                                Carretel Retrátil
                            </a>
                            <a href="/equipamentos/lavadoras" onClick={() => handleOptionClick('lavadoras')}>
                                Lavadoras
                            </a>
                            <a href="/equipamentos/equipamentos-de-jardinagem" onClick={() => handleOptionClick('jardinagem')}>
                                Jardinagem
                            </a>
                        </div>
                    </li>


                    <li className={`menu-item ${selectedOption === 'pecas' ? 'active' : ''}`}>
                        <img src="https://testifying-6u5maumev-fe-costa.vercel.app/assets/menu/pecas.png" alt='Peças' className="icon" />

                        <span className="text">Preventiva</span>

                        <div className="compressors-menu">

                            <a href="/manutencao-preventiva" onClick={() => handleOptionClick('kit-manutencao-preventiva')}>
                                Kit Manutenção Preventiva
                            </a>
                        </div>
                    </li>

                    <li className={`menu-item ${selectedOption === 'ferramentas' ? 'active' : ''}`}>
                        <img src="https://testifying-8nzh09jmn-fe-costa.vercel.app/assets/menu/ferramentas.png" alt='Ferramentas' className="icon" />
                        <a href="/ferramentas" className='compress'>
                            <span className="text">Ferramentas</span>
                        </a>
                        <div className="compressors-menu">
                            <a href="/ferramentas/pneumaticas" onClick={() => handleOptionClick('ferramentas-pneumaticas')}>
                                Ferramentas Pneumáticas
                            </a>
                            <a href="/ferramentas/manuais" onClick={() => handleOptionClick('ferramentas-manuais')}>
                                Ferramentas Manuais
                            </a>
                            <a href="/ferramentas/bancada-e-coluna" onClick={() => handleOptionClick('ferramentas-bancada-coluna')}>
                                Ferramentas de Bancada e Coluna
                            </a>
                            <a href="/ferramentas/eletricas" onClick={() => handleOptionClick('ferramentas-eletricas')}>
                                Ferramentas Elétricas
                            </a>
                            <a href="/ferramentas/ferramentas-de-baterias" onClick={() => handleOptionClick('ferramentas-bateria')}>
                                Ferramentas a Bateria
                            </a>
                            <a href="/ferramentas/ferramentas-de-pintura" onClick={() => handleOptionClick('pistolas-pintura')}>
                                Ferramentas de pintura
                            </a>
                        </div>
                    </li>


                </ul>
            </div >
        </>
    );
}

export default MainMenu;
