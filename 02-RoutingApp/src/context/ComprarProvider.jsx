import React from 'react'
import ContextComprar from './ContextComprar'
import { useReducer } from 'react'
import { types } from '../types'


const myReducer = (state= {}, action) => {
    switch(action.type){
        case(types.subscribe) :
            return [...state,
                {nombre:action.payload.nombre, 
                 precio:action.payload.precio
            }]
        case(types.unsubscribe) : 
            return(
                state.filter(filtered => filtered.nombre !== action.payload.nombre)
            ) 
        default :
            return state
    }

}


export const ComprarProvider = ({children}) => {

    const initialValue = []

    const [state,dispatch] = useReducer(myReducer,initialValue)

  return (
    <ContextComprar.Provider value={{state, dispatch}}>
        {children}
    </ContextComprar.Provider>
  )
}
