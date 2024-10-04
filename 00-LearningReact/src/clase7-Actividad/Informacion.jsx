import { Lugar } from "./Lugar";
import { Profesor } from "./Profesor";
import { useContext, useState } from "react";
import { ContextLanguage } from "./context/ContextLanguage";

export const Informacion = () => {

    const {lenguaje} = useContext(ContextLanguage)
    const [profesor,setProfesor] = useState(false)
    const [lugar,setLugar] = useState(false)
    const index = lenguaje[3].idioma

    const handleProfesor = () => {
      setProfesor(!profesor)
      setLugar(false)
    }

    const handleLugar = () => {
      setLugar(!lugar)
      setProfesor(false)
    }
  return (
    <>
      <div className="container-informacion">
        <h2>{lenguaje[index].titulo}</h2>
        <p>{lenguaje[index].texto} </p>
      </div>
      <div className="container-botones">
        <button onClick={handleProfesor}>{lenguaje[index].boton1}</button>
        <button onClick={handleLugar}>{lenguaje[index].boton2}</button>
      </div>
      {
        profesor ? <Profesor index={index}></Profesor> : null
      }
      {
        lugar ? <Lugar index={index} ></Lugar> : null
      }  
    </>
  );
};

