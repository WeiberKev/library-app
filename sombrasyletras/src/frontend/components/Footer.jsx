import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-4 pb-2 mt-auto">
      <div className="container">
        <div className="row">
          {/* Sobre nosotros */}
          <div className="col-md-6 mb-3">
            <h5 className="fw-bold">
              <i className="fas fa-info-circle me-2"></i>Sobre nosotros
            </h5>
            <p className="mb-0">
              Sombras y letras es un proyecto dedicado a promover la lectura y el acceso al conocimiento.
            </p>
          </div>
          {/* Contacto */}
          <div className="col-md-6 mb-3">
            <h5 className="fw-bold">
              <i className="fas fa-address-book me-2"></i>Contacto
            </h5>
            <p className="mb-1">
              <i className="fas fa-envelope me-2"></i>contacto@sombrasyletras.com
            </p>
            <p className="mb-2">
              <i className="fas fa-phone me-2"></i>+1 234 567 890
            </p>
            <div>
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-light" />
        <div className="text-center small">
          © 2025 Sombras y letras. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}