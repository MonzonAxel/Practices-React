import React, { useState } from 'react'
import ContextUsuario from './ContextUsuario'
import { useReducer } from 'react'
import { types } from '../types'


const init = () => {
    const valor = localStorage.getItem("estado")
    return{
        estado:!!valor
    }
}

const reducer = (state={},action) => {
    switch(action.type){
        case(types.login) : 
            return {
                estado:true
            }
        case(types.logout) :
            return {
                estado:false
            }
        default: 
            return state
    }
}

export const UsuarioProvider = ({children}) => {
    
    const [nombreUser, setNombreUser] = useState("")

    const appLogin = () => {
        localStorage.setItem("estado",true)
        dispatch({type : types.login})
    }

    const appLogout =() => {
        localStorage.removeItem("estado")
        dispatch({type:types.logout})
    }

    const [state,dispatch] = useReducer(reducer,{},init)
  return (
    <ContextUsuario.Provider value={{...state ,appLogin, appLogout,setNombreUser, nombreUser}}>
        {children}
    </ContextUsuario.Provider>
  )
}
