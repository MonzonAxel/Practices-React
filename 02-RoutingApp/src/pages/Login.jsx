import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import './login.css';

export const Login = () => {
   const {appLogin} = useAuth();
   const nvg = useNavigate();

  const login = () => {
    nvg("/inicio", {replace:true})
    appLogin()
  }
  return (
    <>
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-input"
          placeholder=" "
          required
        />
        <label className="form-label">Usuario</label>
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-input"
          placeholder=" "
          required
        />
        <label className="form-label">Contraseña</label>
      </div>
      <button onClick={login} className="login-button">Ingresar</button>
    </div>
      {/* <article>
        <section>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter your email' />
          </div>
          <div>
            <label htmlFor="email">Contraseña</label>
            <input type="email" placeholder='Enter your email' />
          </div>
          

          <div>Login</div>
        </section>
        <section>
          <img src="imagenRight.png" alt="zapatilla" />
        </section>
      </article>
      <button onClick={login}>Login</button> */}
    </>
  )
}
