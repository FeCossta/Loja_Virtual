import React from 'react';
import './SobreNos.css';
import { FaPlusCircle } from 'react-icons/fa';

function SobreNos() {
    return (
        <>
        <section className="about-us">
            <div>
                <div className="about-us-content">
                    <div className="about-us-logo">
                        <img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/us/logo.png" alt="Logo da empresa" />
                    </div>
                    <div className="about-us-text">
                        <h2 className="about-us-title">Quem somos nós?</h2>
                        <div className="about-us-description">
                            <p>Com 11 anos de tradição, a Manutec se orgulha de ser um Distribuidor Oficial Schulz. Embora nossa presença no mercado online seja mais recente, nossa jornada no mundo das ferramentas e Equipamentos Schulz se estende por mais de uma década.</p>
                            <p>Nossa equipe técnica é formada por profissionais treinados pela renomada Schulz, a maior fabricante de Compressores de Ar da América Latina. Essa expertise de 11 anos agora está ao seu alcance no mundo digital.</p>
                            <p>Além de ser uma Distribuidora Schulz de confiança, oferecemos uma ampla gama de serviços, incluindo assistência técnica, manutenção preventiva e corretiva, bem como soluções completas em tratamento de Ar Comprimido.</p>
                            <p>Operamos com eficiência e agilidade, fornecendo os melhores Produtos Schulz, garantindo qualidade, confiabilidade e entrega rápida.</p>
                            <p>Nossa equipe técnica experiente está à disposição para auxiliá-lo na escolha das Peças Schulz ideais para seu orçamento e necessidades.</p>
                            <p>Como um dos maiores Distribuidores Schulz, nosso atendimento é sempre personalizado, adaptado a cada solicitação. Com 11 anos de experiência, estamos prontos para oferecer as melhores soluções em compressores de ar e equipamentos Schulz.</p>
                        </div>
                        <a href="/error" className="saibaMais">
                            <span>Saiba mais <FaPlusCircle style={{ verticalAlign: 'middle' }} /></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="infoSchulz">
            <div className="bloco">
                <img src="https://testifying-oojzjfzgp-fe-costa.vercel.app/assets/us/produtos.png" alt="" />
                <h4 className='title'>Produtos</h4>
                <p>Produtos schulz disponíveis para compra</p>
            </div>
            <div className="bloco">
            <img src="https://testifying-oojzjfzgp-fe-costa.vercel.app/assets/us/pecas.png" alt="" /> 
                <h4 className='title'>Peças de Reposição</h4>
                <p>Variedade em peças para reposição</p>
            </div>
            <div className="bloco">
            <img src="https://testifying-oojzjfzgp-fe-costa.vercel.app/assets/us/site-seguro.png" alt="" />
                <h4 className='title'>Site seguro</h4>
                <p>Ambiente seguro e garantia para compras</p>
            </div>
            <div className="bloco">
            <img src="https://testifying-oojzjfzgp-fe-costa.vercel.app/assets/us/schulz.png" alt="" />
                <h4 className='title'>Loja Oficial</h4>
                <p>Representante oficial Schulz</p>
            </div>
        </div>
        </>       
    );
}

export default SobreNos;
