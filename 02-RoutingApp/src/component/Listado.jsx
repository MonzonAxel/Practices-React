import React from 'react'
import data from '../../datos'
import { Link } from 'react-router-dom'

export const Listado = ({zona}) => {

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
                    </div>
                </section>
                
            ))
        }
    </>
  )
}
