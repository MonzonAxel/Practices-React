import { ContextLanguage } from "./context/ContextLanguage"
import { useContext } from "react"

export const Idiomas = () => {
    const {lenguaje,setLenguaje} = useContext(ContextLanguage)


  return (
    <div className="container-idomas">
        <img src="/images/spain.jpg" alt="España" 
        onClick={() => setLenguaje([...lenguaje, lenguaje[3].idioma = 0])}/>
        <img src="/images/uk.png" alt="Reino Unido" 
        onClick={() => setLenguaje([...lenguaje, lenguaje[3].idioma = 1])} />
        <img src="/images/francia.png" alt="Francia"  
        onClick={() => setLenguaje([...lenguaje, lenguaje[3].idioma = 2])}/>
      </div>
  )
}
