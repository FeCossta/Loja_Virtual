import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HomePage from './pages/HomePage'
import ErrorMessage from './pages/ErrorMessage'
import Contato from './pages/Contato'
import CompressoresPage from './pages/CompressoresPage'
import Pistao from './pages/products/Pistao'
import ProductList from './pages/products/ProductList'
import productsData from './pages/products/Products.json'
import ProductDeatail from './pages/products/ProductDeatail'
import LayoutProdcts from './pages/products/LayoutProdcts'
import Parafuso from './pages/products/Parafuso'
import Isento from './pages/products/Isento'
import Jet from './pages/products/Jet'
import TratamentoPage from './pages/TratamentoPage'
import Secadoras from './pages/products/Secadoras'
import SeparadorAO from './pages/products/SeparadorAO'
import Purgadores from './pages/products/Purgadores'
import FIltroDeLinha from './pages/products/FIltroDeLinha'
import EquipamentosPage from './pages/EquipamentosPage'
import Geradores from './pages/products/Geradores'
import Aspiradores from './pages/products/Aspiradores'
import Inversoras from './pages/products/Inversoras'
import MotoresCombustao from './pages/products/MotoresCombustao'
import Carretel from './pages/products/Carretel'
import Lavadoras from './pages/products/Lavadoras'
import PreventivePage from './pages/PreventivePage'






import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/error",
    element: <ErrorMessage />,
  },
  {
    path: "/compressores",
    element: <CompressoresPage />,
  },
  {
    path: "/compressores/pistao",
    element: <Pistao />,
  },

  {
    path: "/compressores/parafuso",
    element: <Parafuso />

  },
  {
    path: "/compressores/isento",
    element: <Isento />

  },
  {
    path: "/compressores/jet",
    element: <Jet />
  },

  {
    path: "/tratamento",
    element: <TratamentoPage />
  },

  {
    path: "/tratamento/secadoras",
    element: <Secadoras />
  },

  
  {
    path: "/tratamento/separador-de-agua-e-oleo",
    element: <SeparadorAO />
  },

  {
    path: "/tratamento/purgador-eletronico",
    element: <Purgadores />
  },
  
  {
    path: "/tratamento/filtro-de-linha",
    element: <FIltroDeLinha />
  },
  
  {
    path: "/equipamentos",
    element: <EquipamentosPage />
  },
  
  {
    path: "/equipamentos/aspiradores",
    element: <Aspiradores/>
  },
  
  {
    path: "/equipamentos/geradores-de-energia",
    element: <Geradores />
  },
  
  {
    path: '/equipamentos/maquinas-de-solda',
    element: <Inversoras/>
  },

  {
    path: "/equipamentos/motores-a-combustao",
    element: <MotoresCombustao/>
  },

  {
    path: "/equipamentos/carreteis",
    element: <Carretel/>
  },
  
  {
   path: "/equipamentos/lavadoras",
   element: <Lavadoras/>
  },
  
  {
    path:"/manutencao-preventiva",
    element: <PreventivePage/>
  },

  {
    path: "/compressores/produto-list",
    element: (
      <LayoutProdcts>
        <ProductList products={productsData} />
      </LayoutProdcts>
    ),
  },
  
  ...productsData.map((product) => ({
    path: product.link,
    element: (
      <LayoutProdcts>
        <ProductDeatail product={product} />
      </LayoutProdcts>
    ),
  })),
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
