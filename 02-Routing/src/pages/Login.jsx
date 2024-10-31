import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navegar = useNavigate();
  const login = () => {
    navegar("/",{replace:true})
  }
  return (
    <>
    <button onClick={login}>Login</button>
    <div>Pantalla Login</div>
    </>
  )
}
