import { useContext } from "react"
import { ContextLanguage } from "./context/ContextLanguage"

export const Profesor = ({index}) => {

  const {lenguaje} = useContext(ContextLanguage)

  return (
    <div className="container-profesora">
        <p>Profesor</p>
        <img src={`/images/${lenguaje[index].foto}`} alt="Imagen Profesor" />
        <p>{lenguaje[index].nombre}</p>
      </div>
  )
}
