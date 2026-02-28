import React from 'react';

export default function Header({ adminName = "Administrador", onLogout }) {
  return (
    <header className="bg-primary shadow py-3 px-4">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo y título */}
        <div className="d-flex align-items-center">
          <i className="fas fa-book-open fa-lg me-2"></i>
          <span className="fs-4 fw-bold text-white">Sombras y Letras</span>
        </div>
        {/* Navegación y usuario */}
        <nav className="d-flex align-items-center gap-3 ms-auto">
          <button className="btn position-relative text-white" aria-label="Notificaciones">
            <i className="bi bi-bell fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </button>
          {/* Menú de usuario */}
          <div className="dropdown ms-3">
            <button
              className="btn d-flex align-items-center dropdown-toggle text-white"
              type="button"
              id="userMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <span className="me-2 fw-bold">{adminName}</span>
              <img
                src="/img/undraw_profile.svg"
                alt="Usuario administrador"
                className="rounded-circle border border-light"
                style={{ width: 36, height: 36 }}
              />
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
              <li>
                <button className="dropdown-item" type="button">
                  <i className="bi bi-person me-2"></i> Perfil
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  <i className="bi bi-gear me-2"></i> Configuración
                </button>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button
                  className="dropdown-item text-danger"
                  type="button"
                  onClick={onLogout}
                >
                  <i className="bi bi-box-arrow-right me-2"></i> Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}