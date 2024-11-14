import React, { useState, useEffect} from 'react'
import data from '../../datos'
import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ContextComprar from '../context/ContextComprar'

export const Informacion = () => {
    const {state, subscribe, unSubscribe} = useContext(ContextComprar);
    const {nombre} = useParams()
    const navigate = useNavigate()
    const servicio = data.find(finded => finded.nombre === nombre)

    // Revisamos si el servicio está suscrito en el estado global al cargar el componente
    const [estado, setEstado] = useState(() => {
        return state.some(item => item.nombre === nombre);
    });

    // Para que la zona de compras detecte el estado de la informacion.
    useEffect(() => {
        setEstado(state.some(item => item.nombre === nombre));
    }, [state, nombre]);    

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
            { !estado ? 
                <button onClick={() => subscribe(servicio.nombre, servicio.precio)}>Contratar</button>
                :
                <button onClick={() => unSubscribe(servicio.nombre)}>Anular</button>
            }
            <button onClick={back}>Volver</button>
        </div>
    </section>
  )
}
