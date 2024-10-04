import { useContext } from "react"
import { ContextLanguage } from "./context/ContextLanguage"

export const Lugar = ({index}) => {

  const {lenguaje} = useContext(ContextLanguage)

  return (
    <div className="container-lugar">
        <p>Lugar</p>
        <p>{lenguaje[index].direccion}</p>
    </div>
  )
}
