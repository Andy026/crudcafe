import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div>
          <div>
            <div className="d-flex">
              <h4 className="text-white text-decoration-none">Navegación:</h4>
              <div className="d-flex align-items-center mx-2">
              <a
                className="text-white text-decoration-none ms-3"
                href="#inicio"
              >
                Inicio
              </a>
              <a
                className="text-white text-decoration-none ms-3"
                href="productos"
              >
                Productos
              </a>
              <a
                className="text-white text-decoration-none ms-3"
                href="extra"
              >
                Extra
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
