import { Component50 } from "./Component50";
import { Component51 } from "./Component51";
import { Component52 } from "./Component52";
import { Component53 } from "./Component53";

export function Clase5() {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];
  
  return (
    <div className="App">
      <div>
        <h1>Clase 5</h1>
        <Component50 reyes={reyes} />
        <Component51 reyes={reyes} />
        <Component52 reyes={reyes} />
        <Component53 reyes={reyes} />
      </div>
    </div>
  );
}