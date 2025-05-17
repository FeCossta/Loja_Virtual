import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = () => {

  const handleClickBack = () => {
    window.location.href = '/'
  }

  const handleClickContact = () => {
    window.location.href = '/contato'
  }

  return (
    <div className="error-message-container">
      <div className="error-message">
        <h1 className="titleError">Espera aí</h1>
        <p>Ops, esta parte do site ainda não está pronta.</p>
        <p>Se tiver interesse e quiser saber mais, entre em contato conosco. Ficaremos felizes em ajudá-lo.</p>
        <span className='error-btn'>
        <button onClick={handleClickBack} >Voltar</button>
        <button onClick={handleClickContact}>Contato</button>
        </span>
      </div>
    </div>
  );
};

export default ErrorMessage;
