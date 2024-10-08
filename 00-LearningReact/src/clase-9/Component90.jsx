import { useReducer, useState } from "react";

const currentTime = new Date();
const currentMonth = currentTime.getMonth();
const currentYear = currentTime.getFullYear();

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const initialValue = { month: currentMonth, year: currentYear };

const types = {
  incrementMonth: "incrementMonth",
  decrementMonth: "decrementMonth",
  incrementYear: "incrementYear",
  decrementYear: "decrementYear",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.incrementMonth:
      return { ...state, month: state.month === 11 ? 0 : state.month + 1 };

    case types.decrementMonth:
      return { ...state, month: state.month === 0 ? 11 : state.month - 1 };

    case types.incrementYear:
      return { ...state, year: state.year + action.payload };

    case types.decrementYear:
      return { ...state, year: state.year - action.payload };

    default:
      return state;
  }
};

export const Component90 = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(1);

  return (
    <>
      <h3>Actividad 1</h3>
      <h4>
        {months[state.month]} {state.year}
      </h4>
      <div>
        <button onClick={() => dispatch({ type: types.incrementMonth })}>
          +
        </button>
        <span style={{ marginInline: "1rem" }}>Mes</span>
        <button onClick={() => dispatch({ type: types.decrementMonth })}>
          -
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({ type: types.incrementYear, payload: Number(number) })
          }
        >
          +
        </button>
        <input
          type="number"
          style={{ width: "3rem", marginLeft: "1rem" }}
          value={number}
          onChange={(e) => {
            const newValue = Math.max(1, e.target.value); 
            setNumber(newValue); 
          }}
        />
        <span style={{ marginInline: "1rem" }}>Año</span>
        <button
          onClick={() =>
            dispatch({ type: types.decrementYear, payload: Number(number) })
          }
        >
          -
        </button>
      </div>
    </>
  );
};
