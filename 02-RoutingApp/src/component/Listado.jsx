import React from 'react'
import data from '../../datos'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContextComprar from '../context/ContextComprar'

export const Listado = ({zona}) => {
    
    const {state} = useContext(ContextComprar)
    const datos = data.filter(filter => filter.zona === zona)

  return (
    <>
        {
            datos.map((data,index) => (
                <section key={index}>
                    <div>
                        <h4>
                            {data.nombre}
                        </h4>
                        <p>
                            {data.situacion}
                        </p>
                    </div>
                    <div>
                        <img src={data.imagen} alt={data.imagen} />
                    </div>
                    <div>
                    <Link to={`/informacion/${data.nombre}`}>
                        <button>+ Info</button>
                    </Link>
                    {
                        state.some(item => item.nombre === data.nombre) && (
                            <p>Servicio Contratado!</p>
                        )
                    }
                    </div>
                </section>
                
            ))
        }
    </>
  )
}
