import React, { useState } from 'react';
import { Accordion } from './component/Accordion';
import { Footer } from './component/Footer';
import { Banner } from './component/Banner';
import { Header } from './component/Header';
import { Body } from './component/Body';
import "./App.css"
import MultiStepForm from './component/MultiStepForm';

function App() {

  const accordionData = [
    { title: 'Turno', buttons: ['A', 'B', 'C', 'D'] },
    { title: 'Consultas', buttons: ['A', 'B', 'C', 'D'] },
    { title: 'Reservas', buttons: ['X', 'Y', 'Z'] },
    { title: 'Servicios', buttons: ['1', '2', '3', '4'] },
  ];
  return (
    <>
    <Header></Header>

    {/* Opcion 2 me parece mas decente con la constante*/}
    <div style={{ width: '300px', margin: '0 auto', padding: '20px' }}>
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} buttons={item.buttons} />
      ))}
    </div>

    <MultiStepForm></MultiStepForm>
    <Body></Body>
    <Banner></Banner>  
    <Footer></Footer>

  </>
  );
}

export default App;


