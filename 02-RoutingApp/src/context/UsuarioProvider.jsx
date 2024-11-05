import React from 'react'
import ContextUsuario from './ContextUsuario'
import { useReducer } from 'react'

const types = {
    login:"login",
    logout:"logout"
}

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

    const [state,dispatch] = useReducer(reducer,{},init)
  return (
    <ContextUsuario.Provider value={{...state ,appLogin, appLogout}}>
        {children}
    </ContextUsuario.Provider>
  )
}
