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
          <img
            src={product.image}
            alt={product.name}
            loading={product.image.loading || 'lazy'}
          />
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
            {product.txt && (
              <p>
                {product.txt}
              </p>
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

            {product.nest && (
              <tr>
                <td>Motor elétrico (n° de estágios)</td>
                <td>{product.nestM}</td>
              </tr>
            )}
            {product.tanque && (
              <tr>
                <td>Capacidade do Tanque</td>
                <td>{product.tanque}</td>
              </tr>
            )}

            {product.tanqueOil && (
              <tr>
                <td>Cap. tanque de óleo</td>
                <td>{product.tanqueOil}</td>
              </tr>
            )}

            {product.aspmh && ( 
              <tr>
                <td>Aspiração ar (m³/hora)</td>
                <td>{product.aspmh}</td>
              </tr>
            )}

            {product.aspls && (
              <tr>
                <td>Aspiração ar (l/s)</td>
                <td>{product.aspls}</td>
              </tr>
            )}

            {product.eletrodo && (
              <tr>
                <td>Eletrodo AWS 6013</td>
                <td>{product.eletrodo}</td>
              </tr>
            )}

            {product.fator && (
              <tr>
                <td>Fator de Trabalho %</td>
                <td>{product.fator}</td>
              </tr>
            )}

            {product.length && (
              <tr>
                <td>Comprimento (mm)</td>
                <td>{product.length}</td>
              </tr>
            )}
            {product.Consumols && (
              <tr>
                <td>Consumo de Ar (l/s)</td>
                <td>{product.Consumols}</td>
              </tr>
            )}
            {product.consumoPcm && (
              <tr>
                <td>Consumo de Ar (pcm)</td>
                <td>{product.consumoPcm}</td>
              </tr>
            )}
            {product.dimHose && (
              <tr>
                <td>Diâmetro da Mangueira (pol.)</td>
                <td>{product.dimHose}</td>
              </tr>
            )}
            {product.squareFit && (
              <tr>
                <td>Encaixe Quadrado (pol.)</td>
                <td>{product.squareFit}</td>
              </tr>
            )}
            {product.airNiple && (
              <tr>
                <td>Entrada de Ar Niple (pol.)</td>
                <td>{product.airNiple}</td>
              </tr>
            )}
            {product.ruido && (
              <tr>
                <td>Nível de Ruído (dbA)</td>
                <td>{product.ruido}</td>
              </tr>
            )}
            {product.psi && (
              <tr>
                <td>Pressão de Trabalho (psi)</td>
                <td>{product.psi}</td>
              </tr>
            )}
            {product.rpm && (
              <tr>
                <td>Rotação Livre (rpm)</td>
                <td>{product.rpm}</td>
              </tr>
            )}
            {product.vibration && (
              <tr>
                <td>Vibração (m/s²)</td>
                <td>{product.vibration}</td>
              </tr>
            )}


            {product.furMm && (
              <tr>
                <td>Capacidade de Furação em aço (mm)</td>
                <td>{product.furMm}</td>
              </tr>
            )}
            {product.furPol && (
              <tr>
                <td>Capacidade de Furação em aço (pol)</td>
                <td>{product.furPol}</td>
              </tr>
            )}
            {product.depth && (
              <tr>
                <td>Profundidade de Furação (mm)</td>
                <td>{product.depth}</td>
              </tr>
            )}
            {product.fuso && (
              <tr>
                <td>Cone de Fuso</td>
                <td>{product.fuso}</td>
              </tr>
            )}
            {product.rpm60 && (
              <tr>
                <td>RPM 60Hz</td>
                <td>{product.rpm60}</td>
              </tr>
            )}
            {product.battery && (
              <tr>
                <td>Tipo de bateria</td>
                <td>{product.battery}</td>
              </tr>
            )}
            {product.batteryCap && (
              <tr>
                <td>Capacidade da bateria</td>
                <td>{product.batteryCap}</td>
              </tr>
            )}
            {product.batteryAut && (
              <tr>
                <td>Autonomia da bateria</td>
                <td>{product.batteryAut}</td>
              </tr>
            )}
            {product.charge && (
              <tr>
                <td>Tempo de carregamento</td>
                <td>{product.charge}</td>
              </tr>
            )}
            {product.select && (
              <tr>
                <td>Seletor de torque</td>
                <td>{product.select}</td>
              </tr>
            )}

            {product.viscosidade && ( 
              <tr>
                <td>Viscosidade Máxima</td>
                <td>{product.viscosidade}</td>
              </tr>
            )}
            {product.torqueLvl && (
              <tr>
                <td>Nivel de torque</td>
                <td>{product.torqueLvl}</td>
              </tr>
            )}
            {product.velocity && (
              <tr>
                <td>Velocidades</td>
                <td>{product.velocity}</td>
              </tr>
            )}
            {product.velocityControl && (
              <tr>
                <td>Controlador de velocidade?</td>
                <td>{product.velocityControl}</td>
              </tr>
            )}
            {product.perfConc && (
              <tr>
                <td>Perfuração em concreto</td>
                <td>{product.perfConc}</td>
              </tr>
            )}
            {product.perfMad && (
              <tr>
                <td>Perfuração em Madeira</td>
                <td>{product.perfMad}</td>
              </tr>
            )}
            {product.perfMetal && (
              <tr>
                <td>Perfuração em Metal</td>
                <td>{product.perfMetal}</td>
              </tr>
            )}
            {product.reverse && (
              <tr>
                <td>Possui seletor de reverso?</td>
                <td>{product.reverse}</td>
              </tr>
            )}
            {product.led && (
              <tr>
                <td>LED para iluminação?</td>
                <td>{product.led}</td>
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

            {product.vazao && (
              <tr>
                <td>Vazão</td>
                <td>{product.vazao}</td>
              </tr>
            )}


            {product.plugue && (
              <tr>
                <td>Tipo de plugue</td>
                <td>{product.plugue}</td>
              </tr>
            )}




            {product.potencia && (
              <tr>
                <td>Potência(W)</td>
                <td>{product.potencia}</td>
              </tr>
            )}

            {product.corrente && (
              <tr>
                <td>Corrente Elétrica</td>
                <td>{product.corrente}</td>
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

            {product.mmin && (
              <tr>
                <td>Vazão do Compressor (m³/min)</td>
                <td>{product.mmin}</td>
              </tr>
            )}

            {product.oilAbs && (
              <tr>
                <td>Absorção de Óleo Máx. (l)</td>
                <td>{product.oilAbs}</td>
              </tr>
            )
            }

            {product.ih && (
              <tr>
                <td>Capacidade de Drenagem(l/h)</td>
                <td>{product.ih}</td>
              </tr>
            )

            }

            {product.filt && (
              <tr>
                <td>Capacidade de Filtração</td>
                <td>{product.filt}</td>
              </tr>
            )

            }

            {product.whaterSuc && ( 
              <tr>
                <td>Aspira água?</td>
                <td>{product.whaterSuc}</td>
              </tr>
            )}

            {product.void && (
              <tr>
                <td>Vácuo</td>
                <td>{product.void}</td>
              </tr>
            )}
            {product.cv && (
              <tr>
                <td>Potência Máxima do Motor (CV)</td>
                <td>{product.cv}</td>
              </tr>
            )}

            {product.cc && (
              <tr>
                <td>Cilindrada (cc)</td>
                <td>{product.cc}</td>
              </tr>
            )}

            {product.bico && (
              <tr>
                <td>Tipo de Bico</td>
                <td>{product.bico}</td>
              </tr>
            )}

            {product.hose && (
              <tr>
                <td>Tamanho da Mangueira</td>
                <td>{product.hose}</td>
              </tr>
            )}
            {product.hoseType && (
              <tr>
                <td> Tipo de mangueira</td>
                <td>{product.hoseType}</td>
              </tr>
            )}

            {product.cabo && (
              <tr>
                <td>Comprimento do cabo</td>
                <td>{product.cabo}</td>
              </tr>
            )}
            {product.corte && (
              <tr>
                <td>Capacidade de corte</td>
                <td>{product.corte}</td>
              </tr>
            )}
            {product.mandril && (
              <tr>
                <td>Mandril</td>
                <td>{product.mandril}</td>
              </tr>
            )}
            {product.lixa && (
              <tr>
                <td>Tamanho da Lixa (mm)</td>
                <td>{product.lixa}</td>
              </tr>
            )}


            {product.uso && (
              <tr>
                <td>Uso indicado pelo fabricante</td>
                <td>{product.uso}</td>
              </tr>
            )}

            {product.volComb && (
              <tr>
                <td>Volume do Combustível</td>
                <td>{product.volComb}</td>
              </tr>
            )}

            {product.calibre && (
              <tr>
                <td>Corrente - Calibre - Passo</td>
                <td>{product.calibre}</td>
              </tr>
            )}
            {product.mix && (
              <tr>
                <td>Mistura de óleo/gasolina</td>
                <td>{product.mix}</td>
              </tr>
            )}

            {product.sabre && (
              <tr>
                <td>Sabre</td>
                <td>{product.sabre}</td>
              </tr>
            )}

            {product.lamina && (
              <tr>
                <td>Lamina</td>
                <td>{product.lamina}</td>
              </tr>
            )}

            {product.volCart && (
              <tr>
                <td>Volume Cárter</td>
                <td>{product.volCart}</td>
              </tr>
            )}

            {product.vaMax && (
              <tr>
                <td>Potência Máxima (VA)</td>
                <td>{product.vaMax}</td>
              </tr>
            )}

            {product.vaNom && (
              <tr>
                <td>Potência Nominal (VA)</td>
                <td>{product.vaNom}</td>
              </tr>
            )}

            {product.aIn && (
              <tr>
                <td>Faixa de Corrente (entrada)</td>
                <td>{product.aIn}</td>
              </tr>
            )}

            {product.aOut && (
              <tr>
                <td>Faixa de Corrente (saída)</td>
                <td>{product.aOut}</td>
              </tr>
            )}

            {product.curso && (
              <tr>
                <td>Diâmetro x Curso (mm)</td>
                <td>{product.curso}</td>
              </tr>
            )}
            {product.torque && (
              <tr>
                <td>Máximo Torque (N.M)</td>
                <td>{product.torque}</td>
              </tr>
            )}
            {product.kwRpm && (
              <tr>
                <td>Potência Máxima (kW/rpm) (N.M)</td>
                <td>{product.kwRpm}</td>
              </tr>
            )}
            {product.relacomp && (
              <tr>
                <td>Relação Compressão</td>
                <td>{product.relacomp}</td>
              </tr>
            )}
            {product.igni && (
              <tr>
                <td>Sistema de Ignição</td>
                <td>{product.igni}</td>
              </tr>
            )}
            {product.partida && (
              <tr>
                <td>Sistema de Partida</td>
                <td>{product.partida}</td>
              </tr>
            )}
            {product.motor && (
              <tr>
                <td>Tipo do Motor</td>
                <td>{product.motor}</td>
              </tr>
            )}
            {product.descanso && (
              <tr>
                <td>Velocidade de Descanso</td>
                <td>{product.descanso}</td>
              </tr>
            )}

            {product.aplicacao && (
              <tr>
                <td>Equipamento de aplicação</td>
                <td>{product.aplicacao}</td>
              </tr>
            )}

            {product.item1 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item1}</td>
              </tr>

            )}
            {product.item2 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item2}</td>
              </tr>

            )}
            {product.item3 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item3}</td>
              </tr>

            )}
            {product.item4 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item4}</td>
              </tr>

            )}
            {product.item5 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item5}</td>
              </tr>

            )}
            {product.item6 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item6}</td>
              </tr>

            )}
            {product.item7 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item7}</td>
              </tr>

            )}
            {product.item8 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item8}</td>
              </tr>

            )}
            {product.item9 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item9}</td>
              </tr>

            )}
            {product.item10 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item8}</td>
              </tr>

            )}
            {product.item11 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item11}</td>
              </tr>

            )}
            {product.item12 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item12}</td>
              </tr>

            )}
            {product.item13 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item13}</td>
              </tr>

            )}
            {product.item14 && (
              <tr>
                <td>Conteúdo do kit</td>
                <td>{product.item14}</td>
              </tr>

            )}


            {product.hz && (
              <tr>
                <td>Frequência Alternada (Hz)</td>
                <td>{product.hz}</td>
              </tr>
            )}

            {product.combustivel && (
              <tr>
                <td>Combustível</td>
                <td>{product.combustivel}</td>
              </tr>
            )}

            {product.tensao && (
              <tr>
                <td>Tensão (V)</td>
                <td>{product.tensao}</td>
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
