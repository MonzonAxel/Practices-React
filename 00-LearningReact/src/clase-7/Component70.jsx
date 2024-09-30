import { useContext } from "react"
import { Contexto } from "./context/Contexto"

export const Component70 = () =>{

    const {color} = useContext(Contexto)

    return(
        <h3>Uso del Contexto {color}</h3>
    )
}