import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index , {loader as clientesLoader} from './pages'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from './pages/EditarCliente'

import ErrorPage from './components/ErrorPage'
import { action as eliminarClienteAction } from './components/Cliente'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>, 
        loader: clientesLoader,
      errorElement: <ErrorPage/>//Cuando hay un error en el componente de layout entonces coloca el componente de error
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>, //esto se para a Layout y se inserta donde esta outlet
        action: nuevoClienteAction //este es el contenido del formulario
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      }, 
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
