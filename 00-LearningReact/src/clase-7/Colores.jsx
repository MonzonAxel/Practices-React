import { useContext } from "react"
import { Contexto } from "./context/Contexto"

export const Colores = () => {

    const {setColor} = useContext(Contexto)

  return (
    <div style={{marginLeft:"auto", marginRight:"auto", width:"350px", cursor:"pointer"}}>
        <p>Selecciona un color para las 3 paginas: </p>
        <div style={{backgroundColor:"red",width:"2rem"}} onClick={() => setColor("red")}>Rojo</div>
        <div style={{background:"blue"}} onClick={() => setColor("blue")}>Azul</div>
        <div style={{background:"white"}} onClick={() => setColor("white")}>Blanco</div>
        <div style={{background:"yellow"}} onClick={ () => setColor("yellow")}>Amarillo</div>
        <div style={{background:"black"}} onClick={ () => setColor("black")}>Negro</div>
        <div style={{background:"orange"}} onClick={ () => setColor("orange")}>Naranja</div>
    </div>
  )
}
