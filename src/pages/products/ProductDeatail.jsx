import React, { useState } from 'react';
import './ProductDeatail.css';

const ProductDeatail = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const [productName, setProductName] = useState('');
  const openModal = () => {
    setShowModal(true);
    setProductName(product.name);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="ProductDetail">
        <div className="ProductDetailImage">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="ProductDetailInfo">
          <h1>{product.name}</h1>
          <p>Código do Produto: {product.code}</p>
          <p>Fabricante: {product.manufacturer}</p>
          <h1>VALOR SOB CONSULTA</h1>
          <button onClick={openModal}>Solicite um Orçamento</button>
        </div>
      </div>

      <div className="contato">
        <h1>
          Tem dúvidas se este é o compressor ideal para você?
        </h1>
        <p>
          Entre em contato conosco através dos nossos canais de <a href="/contato">contato</a>
        </p>
      </div>

      <div className="description">
        <h1 className="desc-title">Descrição completa:</h1>
        <table>
          <tbody>
            <tr>
              <th>Informação</th>
              <th>Valor</th>
            </tr>
            <tr>
              <td>Potência do motor</td>
              <td>{product.hp}</td>
            </tr>
            <tr>
              <td>Número de polos</td>
              <td>{product.polos}</td>
            </tr>
            <tr>
              <td>Volume do reservatório</td>
              <td>{product.reservatorio}</td>
            </tr>
            <tr>
              <td>Peso Líquido (Kg)</td>
              <td>{product.pesoL}</td>
            </tr>
            <tr>
              <td>Peso Bruto (Kg)</td>
              <td>{product.pesoB}</td>
            </tr>
            <tr>
              <td>Dimensão L x A x C (mm)</td>
              <td>{product.dim}</td>
            </tr>
            <tr>
              <td>Deslocamento Teórico (l/min)</td>
              <td>{product.lmin}</td>
            </tr>
            <tr>
              <td>Deslocamento Teórico (pcm)</td>
              <td>{product.pcm}</td>
            </tr>
            <tr>
              <td>Pressão de operação máxima (bar)</td>
              <td>{product.bar}</td>
            </tr>
            <tr>
              <td>Pressão de operação máxima (lbf/pol²)</td>
              <td>{product.pol}</td>
            </tr>
            <tr>
              <td>Pressão de operação mínima (bar)</td>
              <td>{product.minBar}</td>
            </tr>
            <tr>
              <td>Pressão de operação mínima (lbf/pol²)</td>
              <td>{product.minPol}</td>
            </tr>
            <tr>
              <td>Unidade Compressora (n° de pistões)</td>
              <td>{product.npis}</td>
            </tr>
            <tr>
              <td>Unidade Compressora (n° de estágios)</td>
              <td>{product.nest}</td>
            </tr>
            {product.type === 'parafuso' && (
              <>


                <tr>
                  <td>Conexão de descarga (pol)</td>
                  <td>{product.descarga}</td>
                </tr>
                <tr>
                  <td>Chave de partida</td>
                  <td>{product.chave}</td>
                </tr>
                <tr>
                  <td>Interface</td>
                  <td>{product.interface}</td>
                </tr>
                <tr>
                  <td>Tensão (V)</td>
                  <td>{product.tensao}</td>
                </tr>
              </>
            )}

          </tbody>
        </table>
      </div>


      {showModal && (
        <div className="modal">
          <h2>Solicite um Orçamento</h2>
          <form action="https://formspree.io/f/mbjvbzea" method="POST">
            <input type="hidden" name="Produto" value={productName} />
            <input type="text" placeholder="Nome" name="Nome" required />
            <input type="email" placeholder="E-mail" name="_replyto" required />
            <input type="text" placeholder="CNPJ" name="CNPJ" required />
            <input type="text" placeholder="Telefone" name="Telefone" required />
            <input type="text" placeholder="Celular" name="Celular" required />
            <select name="Variação/Quantidade" required>
              <option value="">Variação desejada e/ou quantidade que deseja para este produto</option>
              {Object.keys(product).map((key) => {
                if (key.startsWith('op')) {
                  return (
                    <option key={key} value={product[key]}>
                      {product[key]}
                    </option>
                  );
                }
                return null;
              })}
            </select>

            <p>* Preencha seus dados no formulário acima que entraremos em contato com o orçamento do produto.</p>
            <button type="submit">Enviar</button>
          </form>
          <button className='closer' onClick={closeModal}>Fechar</button>
        </div>
      )}
    </>
  );
};

export default ProductDeatail;
