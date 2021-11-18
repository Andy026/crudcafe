import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div>
          <div>
            <div className="d-flex align-items-center mx-2">
              <h4 className="text-white text-decoration-none">Navegación:</h4>
              <Link className="nav-link text-secondary" to="/">
                Inicio
              </Link>
              <Link className="nav-link text-secondary" to="/productos">
                Productos
              </Link>
              <Link className="nav-link text-secondary" to="/error404">
                Extra
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
