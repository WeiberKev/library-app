import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';
import AutorCard from '../components/AutorCard';

function Autores() {
  const [autores, setAutores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/autores')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar autores');
        return res.json();
      })
      .then(data => {
        setAutores(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <HeaderFront />

      <main className="main-content py-5">
        <section className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">
              <i className="fas fa-user-edit me-2"></i>Autores Destacados
            </h2>
            <p className="text-secondary">Descubre a los escritores más influyentes de nuestra colección</p>
          </div>

          {loading && <p>Cargando autores...</p>}
          {error && <p className="text-danger">{error}</p>}

          <div className="row g-4 justify-content-center">
            {autores.map((autor, idx) => (
              <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                <AutorCard autor={autor} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Autores;

