import React from 'react'
import { RoutesInitial } from './routes/RoutesInitial'
import { UsuarioProvider } from './context/UsuarioProvider.jsx'


export const App = () => {
  return (
        <UsuarioProvider>
          <RoutesInitial></RoutesInitial>
        </UsuarioProvider>     
  )
}
