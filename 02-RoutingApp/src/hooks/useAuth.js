import { useContext } from "react";
import ContextUsuario from "../context/ContextUsuario";

export const useAuth = () => {
    const {estado,appLogin,appLogout} = useContext(ContextUsuario)
    return {estado,appLogin,appLogout}
};

// El useAuth es el puente para llamar basicamente al Contexto.Tambien se puede llamar directamente al Contexto, pero utilizar directamente este componente evita llamarlo y generar confusiones a futuro. Ademas que puedo agregar mas logica de ser necesaria en el useAuth 
 
//Ejemplo :

/*
const confirmLogin = () => {
    if (window.confirm("¿Estás seguro de que quieres iniciar sesión?")) {
      generalLogin();
    }
  };

  const confirmLogout = () => {
    if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
      generalLogout();
    }
  };
*/