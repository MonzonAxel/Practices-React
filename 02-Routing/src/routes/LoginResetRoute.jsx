import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Login } from '../pages/Login'
import {RecuperarContraseña} from "../pages/RecuperarContraseña"
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import {ContenidoRoute} from "./ContenidoRoute"

export const LoginResetRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
          
          }>  
        </Route>

        <Route path="recuperar-contraseña" element={
          <PublicRoutes>
            <RecuperarContraseña/>
          </PublicRoutes>
          }> 
        </Route>

          <Route path='/*' element={
            <PrivateRoutes>
              < ContenidoRoute/>
            </PrivateRoutes>}>
          </Route>

      </Routes>
    </>
  )
}
