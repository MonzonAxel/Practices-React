import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Login } from '../pages/Login'
import {RecuperarContraseña} from "../pages/RecuperarContraseña"
import { PrivateRoute } from './PrivateRoute'

export const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="recuperar-contraseña" element={<RecuperarContraseña></RecuperarContraseña>}></Route>
        <Route path='/*' element={<PrivateRoute></PrivateRoute>}></Route>
      </Routes>
    </>
  )
}
