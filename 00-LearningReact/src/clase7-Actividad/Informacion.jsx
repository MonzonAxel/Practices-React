import { Lugar } from "./Lugar";
import { Profesor } from "./Profesor";
import { useContext } from "react";
import { ContextLanguage } from "./context/ContextLanguage";

export const Informacion = () => {

    const {lenguaje} = useContext(ContextLanguage)
    const index = lenguaje[3].idioma

  return (
    <>
      <div className="container-informacion">
        <h2>{lenguaje[index].titulo}</h2>
        <p>{lenguaje[index].texto} </p>
      </div>
      <div className="container-botones">
        <button>{lenguaje[index].boton1}</button>
        <button>{lenguaje[index].boton2}</button>
      </div>
      <Profesor index={index}></Profesor>
      <Lugar index={index} ></Lugar> 
    </>
  );
};
