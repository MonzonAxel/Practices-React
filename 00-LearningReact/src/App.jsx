import {Navigate, Route, Routes} from "react-router-dom"
import { Navbar } from './Navbar.jsx'
import { Home } from './routes/Home.jsx'
import { AboutUs } from './routes/FormView.jsx'
import { Project } from './routes/UserView.jsx'
import { Clase3 } from "./clase-3/Clase3.jsx"
import { Clase4 } from "./clase-4/Clase4.jsx"
import { Clase5 } from "./clase-5/clase5.jsx"
import { Clase6 } from "./clase-6/Clase6.jsx"
import { Clase7 } from "./clase-7/Clase7.jsx"
import { Clase7Actividad } from "./clase7-Actividad/Clase7Actividad.jsx"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/Project" element={<Project></Project>}></Route>
        <Route path="/Clase3" element={<Clase3></Clase3>}></Route>
        <Route path="/Clase4" element={<Clase4></Clase4>}></Route>
        <Route path="/Clase5" element={<Clase5></Clase5>}></Route>
        <Route path="/Clase6" element={<Clase6></Clase6>}></Route>
        <Route path="/Clase7" element={<Clase7></Clase7>}></Route>
        <Route path="/Clase7plus" element={<Clase7Actividad></Clase7Actividad>}></Route>
        <Route path="/*" element={<Navigate to= "/" />}></Route>
      </Routes>
    </>
  );
};

export default App