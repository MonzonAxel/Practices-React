import React from 'react'
import { useReducer } from 'react'
import Contexto from './Context'
import myReducer from './reducer'
import types from './types'

const init = () => {
  const estado = localStorage.getItem("estado")
  return{
    estado:!!estado
  }
}

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(myReducer, {}, init);

  const generalLogin = () => {
    localStorage.setItem("estado",true)
    dispatch({type: types.login})
    
  }

  const generalLogout = () => {
    localStorage.removeItem("estado") // remuevo el estado ya que al tener !!valor en el init lo leera como false 
    dispatch({type:types.logout})
    
  }

  return (
    <Contexto.Provider value={{...state, generalLogin , generalLogout}}>
      {children}
    </Contexto.Provider>
  )
}
