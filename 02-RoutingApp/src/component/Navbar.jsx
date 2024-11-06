import React from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import { useAuth } from '../hooks/useAuth'

export const Navbar = () => {
    const {appLogout} = useAuth();
    const nvg = useNavigate();
    
    const logout = () => {
        nvg("/login", {replace:true})
        appLogout()
    }

  return (
    <nav>
        <NavLink to="inicio">Inicio</NavLink>
        <NavLink to="norte">Norte</NavLink>
        <NavLink to="compra">Compra</NavLink>
        <button onClick={logout}>Logout</button>
    </nav>
  )
}
