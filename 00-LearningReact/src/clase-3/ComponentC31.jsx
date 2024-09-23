import { useState } from "react";

export const ComponentC31 = () => {
  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },
    {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },
    {
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar",
    },
  ];

  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    if (counter + 1 == reyesGodos.length) {
      setCounter(0);
    }
    setMessage(reyesGodos[counter].nombre + " " + reyesGodos[counter].aficion);
  };

  return (
    <div>
      <h2>Componente 1 - useState * 2 </h2>
      <button onClick={handleClick}>Hacer click</button>
      <p>{message}</p>
    </div>
  );
};