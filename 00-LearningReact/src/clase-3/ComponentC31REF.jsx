import { useRef } from "react";
import { useState } from "react";

export const ComponentC31Ref = () => {
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

  const [counter, setCounter] = useState(0);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setCounter(counter + 1);
    if (counter + 1 >= reyesGodos.length) {
      setCounter(0);
    }
    buttonRef.current.textContent =
      reyesGodos[counter].nombre + " " + reyesGodos[counter].aficion;
  };

  return (
    <div>
      <h2>Componente 1 - UseRef </h2>
      <button onClick={handleClick}>Hacer click</button>
      <p ref={buttonRef}></p>
      <p></p>
    </div>
  );
};
