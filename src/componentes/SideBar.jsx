
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>

        <li>
          <Link to="/compressores" className='side-title'>Compressores</Link>
          <ul>
            <li><Link to="/compressores/parafuso">Compressores Parafuso</Link></li>
            <li><Link to="/compressores/pistao">Compressores Pistão</Link></li>
            <li><Link to="/compressores/jet">Compressores Ar Direto</Link></li>
            <li><Link to="/compressores/isento">Compressores Isento de óleo</Link></li>
            
          </ul>
        </li>
        <p className='border'></p>
        <li>
          <Link to="/tratamento" className='side-title'>Tratamento de ar</Link>
          <ul>
            <li><Link to="/tratamento/secadoras">Secadoras de Ar</Link></li>
            <li><Link to="/tratamento/separador-de-agua-e-oleo">Separadores de Água e Óleo</Link></li>
            <li><Link to="/tratamento/purgador-eletronico"> Purgadores Eletrónicos</Link></li>
            <li><Link to="/tratamento/filtro-de-linha">Filtros de linha</Link></li>
          </ul>
        </li>
        <p className='border'></p>
        <li>
          <Link to="/tratamento" className='side-title'>Equipamentos</Link>
          <ul>
            <li><Link to="/equipamentos/geradores-de-energia">Geradores de Energia</Link></li>
            <li><Link to="/equipamentos/aspiradores"> Aspiradores</Link></li>
            <li><Link to="/equipamentos/maquinas-de-solda">Máquinas de Solda</Link></li>
            <li><Link to="/equipamentos/motores-a-combustao">Motor a Combustão</Link></li>
            <li><Link to="/equipamentos/carreteis">Carretel</Link> Retrátil</li>
            <li><Link to="/equipamentos/lavadoras">Lavadoras</Link></li>
            <li><Link to="/equipamentos/equipamentos-de-jardinagem">Jardinagem</Link></li>
          </ul>
        </li>
        <p className='border'></p>
        <li>
          <Link to="/tratamento" className='side-title'>Preventiva</Link>
        </li>
        <p className='border'></p>
        <li>
          <Link to="/tratamento" className='side-title'>Ferramentas</Link>
          <ul>
            <li><Link to="/ferramentas/pneumaticas">Ferramentas Pneumáticas</Link></li>
            <li><Link to="/ferramentas/manuais">Ferramentas Manuais</Link></li>
            <li><Link to="/ferramentas/bancada-e-coluna"> Ferramentas de Bancada e Coluna</Link></li>
            <li><Link to="/ferramentas/eletricas">Ferramentas Elétricas</Link></li>
            <li><Link to="/ferramentas/ferramentas-de-baterias">Ferramentas a Bateria</Link></li>
            <li><Link to="/ferramentas/ferramentas-de-pintura">Ferramentas de pintura</Link></li>
          </ul>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
