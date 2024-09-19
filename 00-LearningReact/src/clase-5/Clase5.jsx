import { Component4 } from "./Component4";
import { Component3 } from "./Component3";
import { Component2 } from "./Component2";
import { Component } from "./Component";

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
        <Component reyes={reyes} />
        <Component2 reyes={reyes} />
        <Component3 reyes={reyes} />
        <Component4 reyes={reyes} />
      </div>
    </div>
  );
}