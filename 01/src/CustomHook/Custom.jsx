import { useState } from "react";

export const useCustom = (initial=0, max,min) => {
    let [count,setCount] = useState(0)

    const increase = () => {
        setCount(++count)
    }

    const decrease = () =>{
        setCount(--count)
    }

    const reset = () =>{
        setCount(0)
    }

    return({count,increase,decrease,reset})
}