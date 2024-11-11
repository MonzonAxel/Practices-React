import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import { PaginaInicio} from "../pages/PaginaInicio"
import { Compra } from '../pages/Compra'
import { Norte } from '../pages/Norte'
import { Navbar } from "../component/Navbar"
import { Informacion } from '../component/Informacion'

export const RoutesAccess = () => {
  return (
    <>
    <Navbar></Navbar>
     <Routes>
      <Route path="inicio" element={
        <PaginaInicio></PaginaInicio>}></Route>
      <Route path="norte" element={<Norte></Norte>}></Route>
      <Route path='compra' element={<Compra></Compra>}></Route>
      <Route path="/informacion/:nombre" element={<Informacion />} />
      <Route path='/*' element={<Navigate to="inicio"></Navigate>}></Route>
     </Routes>
    
    </>
  )
}