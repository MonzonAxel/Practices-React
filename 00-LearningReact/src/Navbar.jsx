import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div name="container-fluid">
        <Link className="navbar-brand">
          Navbar
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
          </div>
        </div>
      </div>
    </nav>
  );
};
