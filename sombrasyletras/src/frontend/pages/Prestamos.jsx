import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';
import { API_BASE_URL } from '../../config';

function Prestamos() {
  const [libros, setLibros] = useState([]);
  const [libroId, setLibroId] = useState('');
  const [dias, setDias] = useState('');
  const [fechaPrestamo, setFechaPrestamo] = useState('');
  const [fechaDevolucion, setFechaDevolucion] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/libros`)
      .then(res => res.json())
      .then(setLibros)
      .catch(err => console.error('Error al cargar libros', err));
  }, []);

  const calcularFechaDevolucion = () => {
    if (!fechaPrestamo || !dias) return;
    const fecha = new Date(fechaPrestamo);
    fecha.setDate(fecha.getDate() + parseInt(dias));
    setFechaDevolucion(fecha.toISOString().split('T')[0]);
  };

  const guardarDatos = async (e) => {
    e.preventDefault();

    // Validar que la fecha de préstamo sea hoy o mayor
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Ignorar hora
    const fechaPrestamoDate = new Date(fechaPrestamo);

    if (fechaPrestamoDate < hoy) {
      alert('La fecha de préstamo debe ser hoy o una fecha futura.');
      return;
    }

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      alert('Debes iniciar sesión');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/prestamos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fechaprestamo: fechaPrestamo,
          fechadevolucion: fechaDevolucion,
          usuario: { id: user.id },
          libro: { id: libroId }
        })
      });

      if (response.ok) {
        alert('Préstamo registrado con éxito');
      } else {
        const msg = await response.text();
        alert(`Error al guardar: ${msg}`);
      }
    } catch (error) {
      console.error(error);
      alert('Error al conectar con el servidor');
    }
  };

  // Obtener la fecha mínima para el input de fecha (hoy)
  const minFechaPrestamo = (() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  })();

  return (
    <div className="app-container">
      <HeaderFront />
      <main className="main-content min-vh-100 py-5">
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="card shadow-lg border-0">
                <div className="card-body bg-white text-primary rounded">
                  <h2 className="fw-bold mb-4 text-center">
                    <i className="fas fa-handshake me-2"></i>Formulario de Préstamo
                  </h2>
                  <form onSubmit={guardarDatos}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-book me-2"></i>Seleccionar libro
                      </label>
                        <select
                          className="form-select"
                          value={libroId}
                          onChange={e => setLibroId(e.target.value)}
                          required
                        >
                          <option value="">-- Elige un libro --</option>
                          {libros.map(libro => (
                            <option key={libro.id} value={libro.id}>
                              {libro.nombre}
                            </option>
                          ))}
                        </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-calendar-alt me-2"></i>Fecha de préstamo
                      </label>
                      <input
                        type="date"
                        value={fechaPrestamo}
                        min={minFechaPrestamo}
                        onChange={(e) => setFechaPrestamo(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-clock me-2"></i>Días de préstamo
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={dias}
                        onChange={(e) => setDias(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="d-flex gap-2 justify-content-center mb-3">
                      <button type="button" className="btn btn-primary" onClick={calcularFechaDevolucion}>
                        <i className="fas fa-calendar-check me-1"></i> Calcular devolución
                      </button>
                      <button type="submit" className="btn btn-outline-primary">
                        <i className="fas fa-save me-1"></i> Guardar datos
                      </button>
                    </div>
                    {fechaDevolucion && (
                      <div className="alert alert-primary text-center fw-semibold">
                        <i className="fas fa-calendar-day me-2"></i>
                        Fecha de devolución: <strong>{fechaDevolucion}</strong>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Prestamos;