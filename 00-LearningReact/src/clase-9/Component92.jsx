import React, { useReducer, useState } from "react";

const types = {
  add: "add",
  addUnidad: "addUnidad",
  lessUnidad: "lessUnidad",
  delete: "delete",
};

const initialValue = [];

const reducer = (state, action) => {
  switch (action.types) {
    case types.add:
      return;
    case types.edit:
      return;
    case types.delete:
      return;
    default:
      return state;
  }
};

export const Component92 = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const [input,setInputValue] = useState("")

  return (
    <>
      <h3>Actividad 3 | to do List con useReducer</h3>
      <div>
        <label htmlFor="text">Producto:</label>
        <input type="text" value={input} onChange={(e)=>setInputValue(e.target.value)} />
        <button>Añadir</button>
      </div>
      <span>Texto y cantidad unidad</span>
      <button>+</button>
      <button>-</button>
      <button>Eliminar</button>
    </>
  );
};
