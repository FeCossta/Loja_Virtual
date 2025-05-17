import React, { useState } from 'react';
import './Contato.css';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';


const Contato = () => {
  const [nome, setNome] = useState('');
  const [documento, setDocumento] = useState('');
  const [inscricao, setInscricao] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [contato, setContato] = useState('');

  const handleEnviarClick = () => {
    if (!nome || !contato) {
      alert("Por favor, preencha os campos obrigatórios: Nome / Razão Social e Número para Contato.");
      return;
    }

    const form = document.createElement('form');
    form.setAttribute('action', 'https://formspree.io/f/xnqkwnvr');
    form.setAttribute('method', 'POST');
    form.innerHTML = `
      <input type="text" name="Nome / Razão Social" value="${nome}">
      <input type="text" name="CPF / CNPJ" value="${documento}">
      <input type="text" name="Inscrição Estadual / Municipal" value="${inscricao}">
      <input type="text" name="CEP" value="${cep}">
      <input type="text" name="Número" value="${numero}">
      <input type="text" name="Complemento" value="${complemento}">
      <input type="text" name="Número para Contato" value="${contato}">
    `;
    document.body.appendChild(form);
    form.submit();

    const mensagemWhatsApp = `Olá, meu nome é ${nome} e acabei de preencher o formulário para cadastro.`;
    const numeroWhatsApp = '(21) 970397632';
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(urlWhatsApp, '_blank');
  };


  const handleClickBack = () => {
    window.location.href = '/'
  }

  return (
    <>
      <Navbar />
     
      <div className="contato-container">
        <div className='form-field'>
          <h1>Preencha o formulário para adiantar seu atendimento.</h1>
          <p className='redirect'>
            <a
              href={`https://api.whatsapp.com/send?phone=(21)970397632&text=${encodeURIComponent('Olá, ainda não fiz meu cadastro, porém quero tirar uma dúvida rápida')}`}
              target="_blank"
            >
              <p className='redirect-1'>Ou se preferir, entre em contato diretamente no nosso WhatsApp, clicando aqui:{' '}</p>
              <span><FaWhatsapp /></span>
            </a>
          </p>
          <div className="contato-form">
            <p>Campos obrigatórios marcados com <span className="campo-obrigatorio">*</span></p>

            <div className="campo">
              <label htmlFor="nome">
                Nome / Razão Social <span className="campo-obrigatorio">*</span>
              </label>
              <input
                id="nome"
                name='Nome'
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="documento">
                CPF / CNPJ
              </label>
              <input
                id="documento"
                name='Documento'
                type="text"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="inscricao">
                Inscrição Estadual / Municipal
              </label>
              <input
                id="inscricao"
                name='Incricao'
                type="text"
                value={inscricao}
                onChange={(e) => setInscricao(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="cep">
                CEP
              </label>
              <input
                id="cep"
                name='CEP'
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="numero">
                Número
              </label>
              <input
                id="numero"
                name='Numero'
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}

              />
            </div>

            <div className="campo">
              <label htmlFor="complemento">
                Complemento
              </label>
              <input
                id="complemento"
                name='Complemento'
                type="text"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="contato">
                Número para Contato <span className="campo-obrigatorio">*</span>
              </label>
              <input
                id="contato"
                name='Contato'
                type="text"
                value={contato}
                onChange={(e) => setContato(e.target.value)}
                required
              />
            </div>
            <span className='contact-btn'>
              <button onClick={handleEnviarClick}>Enviar</button>
              <button onClick={handleClickBack}>Continuar navegando</button>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contato;
