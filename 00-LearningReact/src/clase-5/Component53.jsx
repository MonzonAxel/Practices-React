import { useState } from "react";

export const Component53 = ({ reyes }) => {
  const [contadores, setContadores] = useState(Array(reyes.length).fill(0));

  const handleCount = (index) => {
    const nuevosContadores = [...contadores];
    nuevosContadores[index] += 1;
    setContadores(nuevosContadores);
  };

  return (
    <div>
      <h1>Componente 4</h1>
      <p>Actividad: Reyes con +10 reinado, +10 comida diaria</p>
      {reyes
        .filter((valor) => valor.reinado >= 10 && valor.vacasComidas >= 10)
        .map((valor, index) => (
          <div key={valor.nombre}>
            {valor.nombre}
            <button onClick={() => handleCount(index)}>
              {contadores[index]}
            </button>
          </div>
        ))}
    </div>
  );
};