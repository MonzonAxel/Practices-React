import {Navigate, Route, Routes} from "react-router-dom"
import { Navbar } from './Navbar.jsx'
import { Home } from './routes/Home.jsx'
import { AboutUs } from './routes/FormView.jsx'
import { Project } from './routes/UserView.jsx'
import { Clase5 } from "./clase-5/clase5.jsx"
import { Clase3 } from "./clase-3/Clase3.jsx"

const App = () => {
  return (
    <>
      <Navbar />
      <Clase3></Clase3>
      <Clase5></Clase5>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/Project" element={<Project></Project>}></Route>
        <Route path="/*" element={<Navigate to= "/" />}></Route>
      </Routes>
    </>
  );
};

export default App