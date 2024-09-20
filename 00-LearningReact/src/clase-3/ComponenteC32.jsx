import { useState } from "react";

export const ComponentC32 = () => {
  const cambios = [
    { moneda: "Euro", cambio: 1 },
    { moneda: "Peso argentino", cambio: 1074.6 },
    { moneda: "Peso colombiano", cambio: 4648.5 },
    { moneda: "Peso mexicano", cambio: 21.5 },
    { moneda: "Dólar", cambio: 1.12 },
  ];

  const [euro, setEuro] = useState(0);

  const handleConverter = (e) => {
    const euroPrice = parseFloat(e.target.value) || 0;
    if (euroPrice < 0) return;
    setEuro(euroPrice);
  };

  return (
    <div>
      <h2>Componente 2 - Convertidor</h2>
      <div>
        <label htmlFor="euro">Euro $</label>
        <input
          type="number"
          id="euro"
          value={euro}
          onChange={handleConverter}
        />
      </div>

      {cambios.filter((cambio) => cambio.moneda !== "Euro")
        .map((cambio, index) => (
          <div key={index}>
            <label htmlFor={cambio.moneda}>{cambio.moneda} $</label>
            <input
              type="number"
              id={cambio.moneda}
              value={(euro * cambio.cambio).toFixed(2)} 
              readOnly
            />
          </div>
        ))}
    </div>
  );
};