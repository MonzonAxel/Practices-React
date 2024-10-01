import { useContext } from "react"
import { Contexto } from "./context/Contexto"

export const Component70 = ({value}) =>{

    const {color} = useContext(Contexto)

    return(
        <div style={{backgroundColor:color}}>
            <h3>{value}</h3>
        </div>
        
    )
}