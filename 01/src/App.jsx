import { useCustom } from "./CustomHook/Custom"
import { ExampleChildren } from "./ExampleChildren"
import { Usuarios } from "./Usuarios"


function App() {

  const {count,increase,decrease,reset} = useCustom()
  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>Incrementar</button>
      <button onClick={decrease}>Decrementar</button>
      <button onClick={reset}>Reset</button>
      <ExampleChildren>
        <p>Texto segun el children</p>
        <span> Viendo como funciona el children </span>
      </ExampleChildren>
      <Usuarios></Usuarios>

      
    </>
  )
}

export default App
