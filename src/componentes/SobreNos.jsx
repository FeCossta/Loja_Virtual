import React from 'react';
import './SobreNos.css';
import { FaPlusCircle } from 'react-icons/fa';

function SobreNos() {
    return (
        <>
            <section className="about-us">
                <div id='sobre-nos'>
                    <div className="about-us-content">
                        <div className="about-us-logo">
                            <img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/us/logo.png" alt="Logo da empresa" />
                        </div>
                        <div className="about-us-text">
                            <h2 className="about-us-title">Quem somos nós?</h2>
                            <div className="about-us-description">
                                <p>Com mais de uma década de tradição, a Manutec se orgulha de ser um Distribuidor Oficial Schulz. No entanto, nossa experiência vai além, pois somos também uma assistência técnica certificada de diversas outras marcas líderes no mercado, como o Grupo GMEG, VONDER, WAP, VULCAN, LYNUS, PRESSURE e muitas outras.</p>
                                <p>Nossa equipe técnica é composta por profissionais treinados por renomadas marcas, garantindo um atendimento especializado em uma ampla variedade de produtos. Essa expertise de mais de 13 anos agora está ao seu alcance no mundo digital.</p>
                                <p>Oferecemos também uma gama completa de serviços, incluindo assistência técnica, manutenção preventiva e corretiva, bem como soluções completas em tratamento de ar comprimido.</p>
                                <p>Operamos com eficiência e agilidade, fornecendo os melhores produtos, garantindo qualidade e confiabilidade.</p>
                                <p>Nossa equipe técnica experiente está à disposição para auxiliá-lo na escolha das peças ideais para seu orçamento e necessidades específicas, seja você um cliente Schulz das melhores marcas do mercado.</p>
                                <p>Com 13 anos de experiência, estamos prontos para oferecer as melhores soluções em compressores de ar e equipamentos de diversas marcas, sempre com um atendimento personalizado, adaptado a cada solicitação.</p>
                            </div>

                            <a href="/error" className="saibaMais">
                                <span>Saiba mais Sobre nossos serviços <FaPlusCircle style={{ verticalAlign: 'middle' }} /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="infoSchulz">
                <div className="bloco">
                    <img src="https://testifying-oojzjfzgp-fe-costa.vercel.app/assets/us/produtos.png" alt="" />
                    <p className='title'>Produtos</p>
                    <p>Produtos schulz disponíveis para compra</p>
                </div>
                <div className="bloco">
                    <img src="https://testifying-oojzjfzgp-fe-costa.vercel.app/assets/us/pecas.png" alt="" />
                    <p className='title'>Peças de Reposição</p>
                    <p>Variedade em peças para reposição</p>
                </div>
                <div className="bloco">
                    <img src="https://testifying-oojzjfzgp-fe-costa.vercel.app/assets/us/site-seguro.png" alt="" />
                    <p className='title'>Site seguro</p>
                    <p>Ambiente seguro e garantia para compras</p>
                </div>
                <div className="bloco">
                    <img src="https://testifying-oojzjfzgp-fe-costa.vercel.app/assets/us/schulz.png" alt="" />
                    <p className='title'>Loja Oficial</p>
                    <p>Representante oficial Schulz</p>
                </div>
            </div>
        </>
    );
}

export default SobreNos;
