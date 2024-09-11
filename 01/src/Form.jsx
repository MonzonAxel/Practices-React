import { useState } from "react";

export const Form = () => {

  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const {userName,email,password} = form

  const onInputChange = ({ target }) => {
    const { id, value } = target;
    setForm({
        ...form,
        [id] : value
    })
  };

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="userName">Ingrese el usuario</label>
        <input
          type="text"
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
