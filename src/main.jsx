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

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import TratamentoPage from './pages/TratamentoPage'
import Secadoras from './pages/products/Secadoras'


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
    element: <Parafuso/>

  },
  {
    path: "/compressores/isento",
    element: <Isento/>

  },
  {
    path: "/compressores/jet",
    element: <Jet/>
  },
  
  {
    path: "/tratamento",
    element: <TratamentoPage/>
  },

  {
    path: "/tratamento/secadoras",
    element: <Secadoras/>
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
