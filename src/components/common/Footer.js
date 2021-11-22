import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div>
          <div>
            <div className="d-flex align-items-center mx-2">
              <h4 className="text-white text-decoration-none lead">Navegación:</h4>
              <Link className="lead nav-link text-secondary" to="/">
                Inicio
              </Link>
              <Link className="lead nav-link text-secondary" to="/productos">
                Productos
              </Link>
              <Link className="lead nav-link text-secondary" to="/error404">
                Extra
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-secondary lead">&copy; todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
