import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HomePage from './pages/HomePage'
import ErrorMessage from './pages/ErrorMessage'
import Contato from './pages/Contato'
import CompressoresPage from './pages/CompressoresPage'
import Pistao from './pages/products/Pistao'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'


const router = createBrowserRouter([{

  path: "/", 
  element: <HomePage/>,

},
{
  path: "/contato",
  
  element: <Contato/>,
},

{
  path: "/error",
  element: <ErrorMessage/>
},
{
  path: "/compressores",
  element: <CompressoresPage/>
},
{
  path: "/compressores/pistao",
  element: <Pistao/>
},

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
