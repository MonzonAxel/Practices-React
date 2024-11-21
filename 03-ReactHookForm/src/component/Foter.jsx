import React from 'react'
import { Banner } from './Banner'

export const Foter = () => {
  return (
    <>
    <div>
        <Banner></Banner>  
    </div>
    <footer style={{ background: "#f9f9f9", display: "flex", justifyContent: "center", width: "100%", padding: "1.5rem" }}>
        
  <section
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "2rem",
      width: "100%",
      maxWidth: "970px",
      marginTop: "25px",
    }}
  >
    <div style={{ gridColumn: "span 1", textAlign: "center" }}>
      <img src="./provincia_icon_Footer.png" alt="" style={{ width: "170px", height: "365px" }} />
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3>Redes Sociales</h3>
        <div style={{ display: "flex", gap: "5px", marginTop: "10px"}}>
          <img src="https://gba.gob.ar/static/footer/logo_facebook.svg" alt="facebook" />
          <img src="https://gba.gob.ar/static/footer/logo_twiter.svg" alt="X" />
          <img src="https://gba.gob.ar/static/footer/logo_ig.svg" alt="Instagram" />
        </div>
      </div>
      <div>
        <h3>Contacto</h3>
        <p style={{marginTop: "10px"}}>Contacto</p>
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
      <h3>Guía Servicios</h3>
      <a href="">Portal de trámites</a>
      <a href="">Expedientes</a>
      <a href="">Seguridad Vial</a>
      <a href="">ARBA</a>
      <a href="">Boletín Oficial</a>
      <a href="">Registro de las Personas</a>
      <a href="">Contrataciones</a>
      <a href="">Ver Todos</a>
      <a href="">Políticas de privacidad</a>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
      <h3>Uso Interno</h3>
      <a href="">Webmail GBA</a>
      <a href="">Webmal HORDE</a>
      <a href="">Sistemas</a>
      <a href="">GDEBA</a>
      <a href="">Portal del Empleado</a>
      <a href="">Mesa de Ayuda</a>
      <a href="">SIAPE</a>
    </div>
  </section>
</footer>

    {/* <footer style={{background:"#f9f9f9", display:"flex",justifyContent:"center", width:"100%", padding:"1rem"}}>

        <section style={{display:"flex", justifyContent:"center", margin:"0", gap:"5rem",marginTop:"25px", flexWrap:"wrap"
            
        }}>
            <div>
                <img src="./provincia_icon_Footer.png" alt="" style={{width:"170px", height:"365px"}} />
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"2rem"}}>
                <div>
                    <div>
                        <h3>Redes Sociales</h3>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",gap:"5px",marginTop:"5px"}}>
                        <img src="https://gba.gob.ar/static/footer/logo_facebook.svg" alt="facebook" />
                        <img src="https://gba.gob.ar/static/footer/logo_twiter.svg" alt="X" />
                        <img src="https://gba.gob.ar/static/footer/logo_ig.svg" alt="Instagram" />
                    </div>
                </div>
            
                <div>
                    <div>
                        <h3>Contacto</h3>
                    </div>
                    <div>
                        <p>Contacto</p>
                    </div>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"column",gap:"5px"}}>
                <h3>Guia Servicios</h3>
                <a href="">Portal de trámites</a>
                <a href="">Expedientes</a>
                <a href="">Seguridad Vial</a>
                <a href="">ARBA</a>
                <a href="">Boletín Oficial</a>
                <a href="">Registro de las Personas</a>
                <a href="">Contrataciones</a>
                <a href="">Ver Todos</a>
                <a href="">Políticas de privacidad</a>
            </div>

            <div style={{display:"flex", flexDirection:"column",gap:"5px"}}>
                <h3>Uso Interno</h3>
                <a href="">Webmail GBA</a>
                <a href="">Webmal HORDE</a>
                <a href="">Sistemas</a>
                <a href="">GDEBA</a>
                <a href="">Portal del Empleado</a>
                <a href="">Mesa de Ayuda</a>
                <a href="">SIAPE</a>
            </div>
        </section>
    </footer> */}
    </>
  )
}
