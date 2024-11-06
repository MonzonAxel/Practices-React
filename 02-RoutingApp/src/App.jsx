import React from 'react'
import { RoutesAccess } from './routes/RoutesAccess'
import { RoutesInitial } from './routes/RoutesInitial'
import { UsuarioProvider } from './context/UsuarioProvider.jsx'


export const App = () => {
  return (
        <UsuarioProvider>
          <RoutesInitial></RoutesInitial>
        </UsuarioProvider>     
  )
}
