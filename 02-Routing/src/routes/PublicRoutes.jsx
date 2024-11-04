import React from 'react'
import { useContext } from 'react'
import Contexto from '../context/Context'
import { Navigate } from 'react-router-dom'

export const PublicRoutes = ({children}) => {
    const {estado} = useContext(Contexto)
  return (!estado)
        ? children
        : <Navigate to="/contenido1"></Navigate>
    
}
