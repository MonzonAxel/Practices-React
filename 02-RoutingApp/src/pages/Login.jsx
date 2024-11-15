import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
// import './login.css';

export const Login = () => {
   const {appLogin, nombreUser,setNombreUser} = useAuth();
   const nvg = useNavigate();

  const login = () => {
    if(!nombreUser){
      return alert("Complete el nombre usuario")
    }
    nvg("/inicio", {replace:true})
    appLogin()
  }

  console.log(nombreUser)

  return (
    <>
        <div className='h-[100vh] flex justify-center items-center'>
          <article className=' w-[750px] flex justify-center'>
            <section className='flex flex-col gap-4 px-2 mr-2'>
              <div>
                <h1>Bienvenidos</h1>
                <p>Ingresar a la sesion de prueba</p>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="text">Ingresar el nombre</label>
                <input required value={nombreUser} onChange={(e) => setNombreUser(e.target.value)}
                 type="text" placeholder='Ingresar nombre' />
              </div>
              <div>
                <button className='block mr-0 ml-0 w-[100%] bg-stone-300' onClick={login}>Login</button>
              </div>
            </section>
            <section className='px-2'>
              <img className="w-[300px]" src="imagenRight.png" alt="zapatilla" />
            </section>
          </article>
        </div>


        {/* <div className="login-container">
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
    </div> */}
    </>
  )
}
