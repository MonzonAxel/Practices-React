import {useReducer, useRef, useState } from "react";

const types = {
  add: "add",
  addUnidad: "addUnidad",
  lessUnidad: "lessUnidad",
  delete: "delete",
};

const initialValue = [];

const reducer = (state, action) => {

  switch (action.type) {
    case types.add:
      return [...state,action.payload] 
    case types.addUnidad:
      return state.map((states) => states.id == action.payload
      ? 
        {...states, cantidad:states.cantidad+1}
      : (states))
    case types.lessUnidad:
      return state.map((states) => states.id == action.payload && states.cantidad >= 1 
      ? 
        {...states, cantidad:states.cantidad+1}
      : (states))
    case types.delete:
      return state.filter((states)=> states.id != action.payload)
    default:
      return state;
  }
};


export const Component92 = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const [input,setInputValue] = useState("")
    const refValue = useRef(null)

  return (
    <>
      <h3>Actividad 3 | to do List con useReducer</h3>
      <div>
        <label htmlFor="text">Producto:</label>
        <input type="text" value={input} onChange={(e)=>setInputValue(e.target.value)} />
        <button
        ref={refValue} 
        onClick={()=> {
          if(input.trim() == "") return
          dispatch({type:types.add, payload:{id:Date.now(),nombre:input,cantidad:1}})
          refValue.current.focus();
          setInputValue("");
        } } 
        >Añadir</button>
      </div>
      {
        state.length === 0 ? (
          <p>No hay tareas</p>
        ) : (
          state.map((states,index) => (
            <div key={index}>
              <span>{states.nombre}  {states.cantidad} </span>
              <button onClick={()=> dispatch({type:types.addUnidad, payload:states.id})}>+</button>
              <button onClick={()=> dispatch({type:types.lessUnidad,payload:states.id})}>-</button>
              <button onClick={()=> dispatch({type:types.delete, payload:states.id})} >X</button>
            </div>
          ))
        ) 
      }
      
    </>
  );
};
