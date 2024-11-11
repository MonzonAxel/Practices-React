import React from 'react'
import data from '../../datos'
import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ContextComprar from '../context/ContextComprar'

export const Informacion = () => {
    const {subscribe,unSubscribe} = useContext(ContextComprar);
    const navigate = useNavigate()
    const {nombre} = useParams()
    const servicio = data.find(finded => finded.nombre === nombre)

    const back = () => {
        navigate(-1)
    }

    if (!servicio) 
        return (
            <div>
                <p>Servicio no encontrado</p>
                <button onClick={back}>Volver</button>
            </div>

        )

  return (
    <section>
        <div>
            <h3>
            {servicio.nombre}
            </h3>
            <p>
                {servicio.servicio}
            </p>
        </div>
        <div>
            <img src={`/${servicio.imagen}`}  alt={servicio.imagen} />
            <span>{servicio.precio}</span>
            <button onClick={subscribe}>Contratar</button>
            <button onClick={unSubscribe}>Anular</button>
            <button onClick={back}>Volver</button>
        </div>
    </section>
  )
}
