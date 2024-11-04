import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Context';

export const Login = () => {
  const navegar = useNavigate();
  const {generalLogin} = useContext(Contexto)

  const login = () => {
    navegar("/",{replace:true})
    generalLogin()
  }
  
  return (
    <>
    <button onClick={login}>Login</button>
    <div>Pantalla Login</div>
    </>
  )
}
