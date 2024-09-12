import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Form } from './Form.jsx'
import { Users } from './Users.jsx'
import { Tareas } from './Tareas.jsx'
import { Footer } from './Footer.jsx'
import ButtonCounter from './ButtonCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtonCounter />
    <Form />
    <Users/>
    <Tareas/>
    <Footer></Footer>
  </StrictMode>,
)
