import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Form } from './Form.jsx'
import { Users } from './Users.jsx'
import { Navbar } from './Navbar.jsx'
import ButtonCounter from './ButtonCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <ButtonCounter />
    <Form />
    <Users/>
  </StrictMode>,
)
