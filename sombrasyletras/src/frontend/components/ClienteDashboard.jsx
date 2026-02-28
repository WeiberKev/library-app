import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/styles.css";

const Bienvenida = () => {
  const navigate = useNavigate();

  return (
    <div className="bienvenida-container text-center rounded-4 shadow p-4 my-5">
      <h2 className="mb-3">¡Bienvenido a la Biblioteca Digital!</h2>
      <p className="mb-4">
        Explora nuestro catálogo y reserva tus libros favoritos fácilmente.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <button
          className="btn btn-primary rounded-pill px-4"
          onClick={() => navigate("/libros")}
        >
          Explorar libros
        </button>
        <button
          className="btn btn-success rounded-pill px-4"
          onClick={() => navigate("/prestamos")}
        >
          Reserva tu libro
        </button>
      </div>
    </div>
  );
};

export default Bienvenida;