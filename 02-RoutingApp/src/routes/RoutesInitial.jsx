import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import {Login} from "../pages/Login"
import {ResetPassword} from "../pages/ResetPassword"
import {PublicRoute} from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"
import { RoutesAccess } from "./RoutesAccess"

export const RoutesInitial = () => {
  return (
    <>
     <Routes>
      <Route path='/login' element={
        <PublicRoute>
            <Login></Login>
        </PublicRoute>
        }></Route>
      <Route path='reset-password' element={
        <PublicRoute>
          <ResetPassword></ResetPassword>
        </PublicRoute>
        }></Route>
      <Route path="/*" 
      element={
        <PrivateRoute>
          <RoutesAccess></RoutesAccess>
        </PrivateRoute>}>
      </Route>      
     </Routes>
    
    </>
  )
}