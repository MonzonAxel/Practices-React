import { DataLanguage } from "./context/ContextLanguage";
import { Idiomas } from "./Idiomas";
import { Informacion } from "./Informacion";
import "./stylesClase7Act.css";

export const Clase7Actividad = () => {
  
  return (
    <DataLanguage>
    <div className="container-general">
      <Idiomas></Idiomas>
      <Informacion></Informacion>
    </div>
    </DataLanguage>
  );
};
