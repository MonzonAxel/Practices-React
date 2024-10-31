import React from 'react'
import {Routes , Route, Navigate} from "react-router-dom"

export const PrivateRoute = () => {
  return (
    <>
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
