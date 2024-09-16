import { useEffect, useRef } from "react";
import { useForm } from "./hooks/useForm";

export const Form = () => {

  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };

  const {form,onInputChange} = useForm(initialForm)

  const { userName,email,password} = form

  useEffect(() => {
    focusRef.current.focus();
  }, []);
  
  const focusRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form)
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="userName">Ingrese el usuario</label>
        <input
          ref={focusRef}
          type="text"
          className="test-ref"
          id="userName"
          placeholder="Ingresar su usuario"
          onChange={onInputChange}
          value={userName}
        />
      </div>
      <div>
        <label htmlFor="email">Ingrese su correo</label>
        <input
          type="text"
          id="email"
          placeholder="Ingresar su correo"
          onChange={onInputChange}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="password">Ingrese su contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Ingresar su contraseña"
          onChange={onInputChange}
          value={password}
        />
      </div>
      <div>
        <button>Guardar</button>
      </div>
    </form>
  );
};
