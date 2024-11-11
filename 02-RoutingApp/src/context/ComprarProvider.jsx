import React from 'react'
import ContextComprar from './ContextComprar'
import { useReducer } from 'react'

const types = {
    subscribe : "subscribe",
    unsubscribe: "unsubcribe"
}

const myReducer = (state= {}, action) => {
    switch(action.type){
        case(types.subscribe) :
            return "esta subscripto"
        case(types.unsubscribe) : 
            return "no esta subscripto"
        default :
            return state
    }

}


export const ComprarProvider = ({children}) => {
    const initialValue = ""

    const subscribe = () => {
        dispatch({type : types.subscribe})
    }
    
    const unSubscribe = () => {
        dispatch({type : types.unsubscribe})
    }

    const [state,dispatch] = useReducer(myReducer,initialValue)

  return (
    <ContextComprar.Provider value={{...state, subscribe , unSubscribe}}>
        {children}
    </ContextComprar.Provider>
  )
}
