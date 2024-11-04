import { Provider } from "./context/Provider"
import { LoginResetRoute } from "./routes/LoginResetRoute"

export const App = () => {
  return (
    <>
    <Provider>

    <LoginResetRoute></LoginResetRoute>
    </Provider>
    </>
  )
}

