import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({children}) => {
    const {estado} = useAuth();
  return (!estado)
  ? children
  : <Navigate to="/inicio"></Navigate>
}
