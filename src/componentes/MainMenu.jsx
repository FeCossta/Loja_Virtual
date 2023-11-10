import React, { useState, useEffect } from 'react';
import './MainMenu.css';
import { FaHome } from 'react-icons/fa';

function MainMenu() {
    const [isSticky, setSticky] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);



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
    };

    return (
        <div className={`main-menu ${isSticky ? 'sticky' : ''}`}>
            <ul>

                <li className='home'>
                    <a href="/"><FaHome /></a>
                </li>

                <li className={`menu-item ${selectedOption === 'compressores' ? 'active' : ''}`}>
                    <img src="https://testifying-8nzh09jmn-fe-costa.vercel.app/assets/menu/compressor.png" className="icon" />
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

                <a href="/error">

                    <li>
                        <img src="https://testifying-8nzh09jmn-fe-costa.vercel.app/assets/menu/ar.png" className="icon" />
                        <span>Tratamento de Ar</span>
                    </li>
                </a>

                <a href="/error">

                    <li>
                        <img src="https://testifying-8nzh09jmn-fe-costa.vercel.app/assets/menu/equip.png" className="iconEquip" />
                        <span>Equipamentos</span>
                    </li>
                </a>

                <a href="/error">

                    <li>
                        <img src="https://testifying-6u5maumev-fe-costa.vercel.app/assets/menu/pecas.png" className="icon" />
                        <span>Peças</span>
                    </li>
                </a>
                <a href="/error">

                    <li>
                        <img src="https://testifying-8nzh09jmn-fe-costa.vercel.app/assets/menu/ferramentas.png" className="icon" />
                        <span>Ferramentas</span>
                    </li>
                </a>

                <a href="/error">

                    <li>
                        <img src="https://testifying-8nzh09jmn-fe-costa.vercel.app/assets/menu/hobby.png" className="icon" />
                        <span>Hobby e Residencial</span>
                    </li>
                </a>
            </ul>
        </div>
    );
}

export default MainMenu;
