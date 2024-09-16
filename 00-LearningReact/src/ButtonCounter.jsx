import { useCounter } from "../src/hooks/useCounter";

const ButtonCounter = () => {
  const { counter, increase, decrease, reset } = useCounter();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increase}>Sumar</button>
      <button onClick={decrease}>Restar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default ButtonCounter;
