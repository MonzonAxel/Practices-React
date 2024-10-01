import { DataLanguage } from "./context/ContextLanguage";
import "./stylesClase7Act.css";

export const Clase7Actividad = () => {
  
  return (
    <DataLanguage>
    <div className="container-general">
      <div className="container-idomas">
        <img src="/images/spain.jpg" alt="España" />
        <img src="/images/francia.png" alt="Francia" />
        <img src="/images/uk.png" alt="Gran Bretaña" />
      </div>
      <div className="container-informacion">
        <h2>Aprenda React intensivamente con una profesora nativa</h2>
        <p>2 dias a la semana una profesora solo para ti </p>
      </div>
      <div className="container-botones">
        <button>Profesora</button>
        <button>Lugar</button>
      </div>
      <div className="container-profesora">
        <p>Profesor</p>
        <img src="/images/aimee.PNG" alt="Imagen Profesor" />
        <p>Nombre  Profesor</p>
      </div>
      <div className="container-lugar">
        <p>Lugar</p>
        <p>Direccion</p>
      </div>
    </div>
    </DataLanguage>
  );
};
