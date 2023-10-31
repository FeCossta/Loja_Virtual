import "./ActionHeader.css"
import {FaSearch} from "react-icons/fa"
import React from 'react'

const ActionHeader = () => {
    return (
        <div className="action-header">
         
          <a href="/"><img src="https://testifying-nbfc5lxc9-fe-costa.vercel.app/assets/img/LogoManuteec-1.png" alt="Logo da Empresa" /></a>
    
          
          <span className="searchBar">
          <input type="text" placeholder="Pesquisar produtos" />
          <button><FaSearch/></button>
          </span>
        </div>
      );
  
}

export default ActionHeader