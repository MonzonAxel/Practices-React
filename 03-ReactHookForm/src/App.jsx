import React, { useState } from 'react';
import { AccordionSection } from './component/AccordionSection';
import { Accordion } from './component/Accordion';
import { Footer } from './component/Footer';
import { Banner } from './component/Banner';
import { Header } from './component/Header';
import { Body } from './component/Body';
import "./App.css"

function App() {

  const accordionData = [
    { title: 'Turno', buttons: ['A', 'B', 'C', 'D'] },
    { title: 'Consultas', buttons: ['A', 'B', 'C', 'D'] },
    { title: 'Reservas', buttons: ['X', 'Y', 'Z'] },
    { title: 'Servicios', buttons: ['1', '2', '3', '4'] },
  ];

  const [openSections, setOpenSections] = useState({
    turno: false,
    consultas: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
    <Header></Header>
    {/* Opcion 1 no me gusta mucho*/}
    <div className="container">
      <h1 className="title">Sistema de Gestión</h1>
      
      <div>
        <AccordionSection
          title="Turno"
          isOpen={openSections.turno}
          onToggle={() => toggleSection('turno')}
        >
          <div className="button-grid">
            <button className="btn btn-blue">Nuevo Turno</button>
            <button className="btn btn-green">Ver Turnos</button>
            <button className="btn btn-purple">Calendario</button>
            <button className="btn btn-yellow">Gestionar Turnos</button>
          </div>
        </AccordionSection>

        <AccordionSection
          title="Consultas"
          isOpen={openSections.consultas}
          onToggle={() => toggleSection('consultas')}
        >
          <div className="button-grid">
            <button className="btn btn-indigo">Nueva Consulta</button>
            <button className="btn btn-pink">Historial</button>
            <button className="btn btn-teal">Estadísticas</button>
            <button className="btn btn-orange">Reportes</button>
          </div>
        </AccordionSection>
      </div>
    </div>

    {/* Opcion 2 me parece mas decente con la constante*/}
    <div style={{ width: '300px', margin: '0 auto', padding: '20px' }}>
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} buttons={item.buttons} />
      ))}
    </div>
    <Body></Body>
    <Banner></Banner>  
    <Footer></Footer>

  </>
  );
}

export default App;


