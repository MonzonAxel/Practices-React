import React from 'react'
import "./header.css"

export const Header = () => {
  return (
        <header>
            <img src="https://gba.gob.ar/imagenes/logo_gba_footer_blanco.svg" alt="" />
            <div>
                <img src="./logo_vtv_web.png" alt="" />
                <ul>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Ministerio de Transporte</a>
                    </li>
                    <li>
                        <a href="">Portal de tramites</a>
                    </li>
                </ul>
            </div>

        </header>
  )
}
