import { useReducer } from "react";

const currentTime = new Date () 
const currentMonth = currentTime.getMonth()
const currentYear = currentTime.getFullYear()

const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Noviembre","Diciembre"]

const initialValue= {month:currentMonth, year:currentYear}

const types = {
    incrementMonth: "incrementMonth",
    decrementMonth: "decrementMonth",
    incrementYear: "incrementYear",
    decrementYear: "decrementYear"
}

const reducer = (state,action) => {
    switch(action.type){
        case types.incrementMonth:
            // if(state.month == 11) {
            //     state.month = 0
            //     return {month:state.month, year:state.year}
            // }
            return {month:state.month+1, year:state.year};

        case types.decrementMonth:
            return {month:state.month-1, year:state.year};

        case types.incrementYear:
            return {month:state.month, year:state.year+1};

        case types.decrementYear:
            return {month:state.month, year:state.year-1};
    }
    return state;
}



export const Component90 = () => {
    const [state,dispatch] = useReducer(reducer,initialValue)

  return (
    <>
      <h3>
        {months[state.month]} {state.year}
      </h3>
      <div >
        Mes
        <button style={{marginInline:"1rem"}}
        onClick={() => dispatch({type:types.incrementMonth})}
        >+</button>
        <button
        onClick={() => dispatch({type:types.decrementMonth})}
        >-</button>
      </div>
      <div>
        Año
        <button style={{marginInline:"1rem"}}
        onClick={() => dispatch({type:types.incrementYear})}
        >+</button>
        <button
         onClick={() => dispatch({type:types.decrementYear})}
         >-
         </button>
      </div>
    </>
  );
};
