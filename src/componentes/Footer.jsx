import React from 'react';
import './Footer.css';
import { FaMailBulk, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <p>Institucional</p>
                    <ul className="footer-links">
                        <li><a href="/error">Sobre nós</a></li>
                        <li><a href="/error">Loja física</a></li>
                        <li><a href="/error">Produtos</a></li>
                        <li><a href="/error">Serviços</a></li>
                        <li><a href="/contato">Contato</a></li> 
                    </ul>
                </div>
                <div className="footer-column">
                    <p>Dúvidas</p>
                    <ul className="footer-links">
                        <li><a href="/error">FAQ</a></li>
                        <li><a href="/error">Termos de uso</a></li>
                        <li><a href="/error">Politica de devolução e troca</a></li>
                        <li><a href="/error">Como comprar</a></li>
                        <li><a href="/error">Lei de proteção de Dados</a></li>
                    </ul>
                </div>
                <div className="footer-column" id="contato"> 
                    <p>Atendimento</p>
                    <ul className="footer-links">
                        <li><FaPhoneAlt /><span> ( 21 ) 97039-3605</span></li>
                        <li><FaWhatsapp /> <span><a href="https://api.whatsapp.com/send?phone=5521970397632">(21) 970397632</a></span></li>
                        <li><FaMailBulk /><span> contato@manutecengenharia.com</span></li>
                        <li>Horário <span>De Segunda à Sexta-feira das 08h às 18h.<br/> Exceto em feriados.</span></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Manutec Engenharia. All rights reserved.
            </div>
            <div className="footer-signature">
                Site criado por <a href="https://api.whatsapp.com/send?phone=5521998607074">Felipe Costa</a>
            </div>
        </footer>
    );
}

export default Footer;
