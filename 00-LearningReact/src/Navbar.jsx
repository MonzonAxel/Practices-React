import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div name="container-fluid">
        <Link className="navbar-brand">
          Listado de Clases y Actividades
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to = "/" className="nav-link ">
              Contador
            </NavLink>
            <NavLink to="/AboutUs" className="nav-link">
              Formulario 
            </NavLink>
            <NavLink to ="/Project" className="nav-link">
              Usuarios
            </NavLink>
            <NavLink to = "/Clase3" className="nav-link ">
              Clase3
            </NavLink>
            <NavLink to = "/Clase4" className="nav-link ">
              Clase4
            </NavLink>
            <NavLink to = "/Clase5" className="nav-link ">
              Clase5
            </NavLink>
            <NavLink to = "/Clase6" className="nav-link ">
              Clase6
            </NavLink>
            <NavLink to = "/Clase7" className="nav-link ">
              Clase7
            </NavLink>
            <NavLink to = "/Clase7plus" className="nav-link ">
              Clase7+
            </NavLink>
            <NavLink to = "/Clase8" className="nav-link ">
              Clase8
            </NavLink>
            <NavLink to = "/Clase9" className="nav-link ">
              Clase9
            </NavLink>
            <NavLink to = "/Clase10" className="nav-link ">
              Clase10
            </NavLink>
            <NavLink to = "/Clase11" className="nav-link ">
              Clase11
            </NavLink>
            <NavLink to = "/Clase12" className="nav-link ">
              Clase12
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
