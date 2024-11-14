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

    const subscribe = (nombre,precio) => {
        dispatch({type : types.subscribe, 
            payload:{
                nombre: nombre,
                precio: precio
            } }
        )
    }
    
    const unSubscribe = (nombre) => {
        dispatch({type : types.unsubscribe,
            payload: {
                nombre:nombre
            }
        })
    }

    const [state,dispatch] = useReducer(myReducer,initialValue)

  return (
    <ContextComprar.Provider value={{state, subscribe, unSubscribe}}>
        {children}
    </ContextComprar.Provider>
  )
}
