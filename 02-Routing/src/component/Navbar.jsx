import {useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Contexto from '../context/Context';

export const Navbar = () => {
  const {generalLogout} = useContext(Contexto)
    // No uso solamente Navigate(-1) ya que al hacer click en volver hacia atras me terminaria volviendo hacia el lugar de donde me deslogie y no es lo que se busca.
    const navegar = useNavigate()
    const logout = () => {
        navegar("/login",{replace:true})
        generalLogout()
    }
  return (
    <>
        <nav>
            <NavLink to="contenido1">Contenido 1</NavLink>
            <NavLink to="contenido2">Contenido 2</NavLink>
            <NavLink to="contenido3">Contenido 3</NavLink>
            <button onClick={logout}>Logout</button>
        </nav>
    </>
  )
}
