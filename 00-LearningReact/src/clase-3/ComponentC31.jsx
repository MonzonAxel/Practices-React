import { useRef } from "react"
import { useState } from "react"

export const ComponentC31 = () => {
    
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]

    const [name,setName] = useState("")
    const [counter,setCounter] = useState(0)
    const buttonRef = useRef(null)

    const handleClick = () => {
        if ( counter <= 2){
            setCounter(counter - 1)
        }
        buttonRef.current.textContent = reyesGodos[counter].nombre

        if(counter == 0){
            setCounter( counter + 1)
        }
        
        
    }

    return(
        <div>
            <h1>Componente 1 </h1>
            <button onClick={handleClick}>
                <div
                ref={buttonRef}
                >    
                </div>
            </button>
        </div>
        
    )
}