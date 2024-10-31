import React from 'react'
import {Routes , Route, Navigate} from "react-router-dom"
import {Contenido1} from "../pages/Contenido1"
import {Contenido2} from "../pages/Contenido2"
import {Contenido3} from "../pages/Contenido3"
import { Navbar } from '../component/Navbar'

export const PrivateRoute = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='contenido1' element={<Contenido1></Contenido1>}>
      </Route>
      <Route path='contenido2' element={<Contenido2></Contenido2>}></Route>
      <Route path='contenido3' element={<Contenido3></Contenido3>}></Route>
      <Route path='/*' element={<Navigate to="contenido1"></Navigate>}>
      </Route>
    </Routes>
    </>
  )
}
