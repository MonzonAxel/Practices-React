import { useContext } from 'react'
import ContextComprar from '../context/ContextComprar'
import { useAuth } from '../hooks/useAuth'

export const Compra = () => {

  const {state,unSubscribe} = useContext(ContextComprar)
  const {nombreUser} = useAuth();
  
  const totalPrecio = state.reduce((total, place) => total + place.precio, 0);

  return (
    <>
      <h2>Lugares a visitar</h2>

      { state && state.length > 0 ?
      state.map((place,index) => (
        <div key={index}>
          <button onClick={() => unSubscribe(place.nombre)}>Anular</button>
          <p>{place.nombre}</p>
          <p>${place.precio}</p>
        </div>
      ))
      :
      <div>
        <p>Todavia no has encontrado ninguna activadad</p>
        <p>Haz Click en Patagonia o Norte y Este para ver ofertas</p>
      </div>
        
    }
    {
      totalPrecio > 0 ? 
      <h3>Total a pagar : ${totalPrecio}</h3>
      : 
      ""
    } 
      
      <h3>Referencia : {nombreUser}</h3>
    </>

  )
}
