import React from 'react';
import { Link } from 'react-router-dom';

const HeaderFront = () => (

    <header className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-3">
        <div className="container-fluid">
            {/* Primera fila: Marca a la izquierda */}
            <div className="row w-100 align-items-center mb-2">
                <div className="col-6 d-flex align-items-center">
                    <Link to="/" className="navbar-brand d-flex align-items-center mb-0">
                        <i className="fas fa-book-open fa-lg me-2"></i>
                        <span className="fw-bold fs-4">Sombras & Letras</span>
                    </Link>
                </div>
                {/* Segunda fila eliminada: Barra de búsqueda centralizada */}
            </div>
            {/* Menú centralizado */}
            <div className="row w-100 justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                    <ul className="navbar-nav flex-row mb-2">
                        <li className="nav-item mx-2">
                            <Link to="/" className="nav-link text-white fw-bold">
                                <i className="fas fa-home me-1"></i> Inicio
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/libros" className="nav-link text-white fw-bold">
                                <i className="fas fa-book me-1"></i> Libros
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/autores" className="nav-link text-white fw-bold">
                                <i className="fas fa-user-edit me-1"></i> Autores
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Tercera fila: Botones de sesión centralizados debajo del menú */}
            <div className="row w-100 justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                    <div className="d-flex mb-2">
                        <Link to="/login" className="btn btn-outline-light me-2">
                            <i className="fas fa-sign-in-alt me-1"></i> Iniciar sesión
                        </Link>
                        <Link to="/registro" className="btn btn-light text-primary">
                            <i className="fas fa-user-plus me-1"></i> Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default HeaderFront;