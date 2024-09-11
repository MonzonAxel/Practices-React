import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [counter,setCounter] = useState(initialValue)

    const increase = () => {
        setCounter(counter+1)
    }

    const decrease = () => {
        if(counter <= 0) return
        setCounter(counter-1)
    }

    const reset = () => {
        setCounter(0)
    }

    return(
        {counter,
        increase,
        decrease,
        reset}
    )
}