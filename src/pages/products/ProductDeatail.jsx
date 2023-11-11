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
          <img src={product.image} alt={product.name} loading={product.image.loading || 'lazy'} />
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
            {product.hp && (
              <tr>
                <td>Potência do motor</td>
                <td>{product.hp}</td>
              </tr>
            )}
            {product.polos && (
              <tr>
                <td>Número de polos</td>
                <td>{product.polos}</td>
              </tr>
            )}
            {product.reservatorio && (
              <tr>
                <td>Volume do reservatório</td>
                <td>{product.reservatorio}</td>
              </tr>
            )}
            {product.pesoL && (
              <tr>
                <td>Peso Líquido (Kg)</td>
                <td>{product.pesoL}</td>
              </tr>
            )}
            {product.pesoB && (
              <tr>
                <td>Peso Bruto (Kg)</td>
                <td>{product.pesoB}</td>
              </tr>
            )}
            {product.dim && (
              <tr>
                <td>Dimensão L x A x C (mm)</td>
                <td>{product.dim}</td>
              </tr>
            )}
            {product.lmin && (
              <tr>
                <td>Deslocamento Teórico (l/min)</td>
                <td>{product.lmin}</td>
              </tr>
            )}
            {product.pcm && (
              <tr>
                <td>Deslocamento Teórico (pcm)</td>
                <td>{product.pcm}</td>
              </tr>
            )}
            {product.bar && (
              <tr>
                <td>Pressão de operação máxima (bar)</td>
                <td>{product.bar}</td>
              </tr>
            )}
            {product.pol && (
              <tr>
                <td>Pressão de operação máxima (lbf/pol²)</td>
                <td>{product.pol}</td>
              </tr>
            )}
            {product.minBar && (
              <tr>
                <td>Pressão de operação mínima (bar)</td>
                <td>{product.minBar}</td>
              </tr>
            )}
            {product.minPol && (
              <tr>
                <td>Pressão de operação mínima (lbf/pol²)</td>
                <td>{product.minPol}</td>
              </tr>
            )}
            {product.npis && (
              <tr>
                <td>Unidade Compressora (n° de pistões)</td>
                <td>{product.npis}</td>
              </tr>
            )}
            {product.nest && (
              <tr>
                <td>Unidade Compressora (n° de estágios)</td>
                <td>{product.nest}</td>
              </tr>
            )}

            {product.volAt7 && (
              <tr>
                <td>Capacidade Vol at 7 bar</td>
                <td>{product.volAt7}</td>
              </tr>
            )}

            {product.volA4 && (
              <tr>
                <td>Capacidade Vol a 4 bar</td>
                <td>{product.volA4}</td>
              </tr>
            )}

            {product.pMax && (
              <tr>
                <td>Pressão Máxima</td>
                <td>{product.pMax}</td>
              </tr>
            )}

            {product.potencia && (
              <tr>
                <td>Potência(W)</td>
                <td>{product.potencia}</td>
              </tr>
            )}

            {product.tempIn && (
              <tr>
                <td>Temperatura Entrada ºC</td>
                <td>{product.tempIn}</td>
              </tr>
            )}

            {product.bsp && (
              <tr>
                <td>Conexão Entrada/Saída - BSP</td>
                <td>{product.bsp}</td>
              </tr>
            )}

            {product.gas && (
              <tr>
                <td>Gás</td>
                <td>{product.gas}</td>
              </tr>
            )}

            {product.pre && (
              <tr>
                <td>Pré Filtro Coalescente</td>
                <td>{product.pre}</td>
              </tr>
            )}

            {product.orv && (
              <tr>
                <td>Ponto de Orvalho</td>
                <td>{product.orv}</td>
              </tr>
            )}


            {product.type === 'parafuso' && (
              <>
                {product.descarga && (
                  <tr>
                    <td>Conexão de descarga (pol)</td>
                    <td>{product.descarga}</td>
                  </tr>
                )}
                {product.chave && (
                  <tr>
                    <td>Chave de partida</td>
                    <td>{product.chave}</td>
                  </tr>
                )}
                {product.interface && (
                  <tr>
                    <td>Interface</td>
                    <td>{product.interface}</td>
                  </tr>
                )}
                {product.tensao && (
                  <tr>
                    <td>Tensão (V)</td>
                    <td>{product.tensao}</td>
                  </tr>
                )}
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
              <option value="">Variação desejada para este produto</option>
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
