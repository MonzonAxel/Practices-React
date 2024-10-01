import { Colores } from "./Colores";
import { Component70 } from "./Component70";
import {Datos} from "./context/Contexto";

export const Clase7 = () => {
  return (
    <>
      <h1>Clase 7 Context</h1>
      <Datos>
        <div style={{display:"flex", justifyContent:"space-around" }}>
        <Component70 value="Pagina 1"></Component70>
        <Component70 value="Pagina 2"></Component70>
        <Component70 value="Pagina 3"></Component70>
        </div>
        <Colores></Colores>
      </Datos>
    </>
  );
};
