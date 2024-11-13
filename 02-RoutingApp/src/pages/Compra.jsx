import { useContext } from 'react'
import ContextComprar from '../context/ContextComprar'
import { types } from '../types'

export const Compra = () => {

  const {state,dispatch} = useContext(ContextComprar)
  
  const totalPrecio = state.reduce((total, place) => total + place.precio, 0);

  const unSubscribe = (nombrePlace) => {
    dispatch({type: types.unsubscribe,
      payload: {
        nombre:nombrePlace
      }
    })
  }

  return (
    <>
      <h2>Lugares a visitar</h2>

      { state && state.length > 0 ?
      state.map((place,index) => (
        <div key={index}>
          <button onClick={() => unSubscribe(place.nombre)}>Anular</button>
          <p>{place.nombre}</p>
          <p>${place.precio}</p>
          <h3>Total a pagar : ${totalPrecio}</h3>
        </div>
      ))
      :
      <div>
        <p>Todavia no has encontrado ninguna activadad</p>
        <p>Haz Click en Patagonia o Norte y Este para ver ofertas</p>
      </div>

        
    }
      <h3>Referencia : NombreUser</h3>
    </>

  )
}
