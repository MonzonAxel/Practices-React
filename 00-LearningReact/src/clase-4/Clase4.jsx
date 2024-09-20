import { useState } from "react";
import { Component40 } from "./Componente40.jsx";

export const Clase4 = () => {
  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178,
    },
    {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169,
    },
    {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81,
    },
    {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126,
    },
    {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141,
    },
    {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69,
    },
  ];

  const [reye, setReyes] = useState(reyes);
  const [precio, setPrecioTotal] = useState(0);

  const agregarPrecio = (precio) => {
    setPrecioTotal((prevPrecio) => prevPrecio + precio);
  };

  const agregarNombre = (nombre) => {
    const updateReye = reye.filter((valor) => valor.nombre !== nombre);
    setReyes(updateReye);
  };

  return (
    <div className="App">
        <h1>Clase 4</h1>
      <div>
        <p>Precio total: ${precio}</p>
      </div>
      {reye.map((valor, index) => (
        <Component40
          key={index}
          nombre={valor.nombre}
          color={valor.color}
          precio={valor.precio}
          agregarPrecio={agregarPrecio}
          agregarNombre={agregarNombre}
        />
      ))}
    </div>
  );
}
