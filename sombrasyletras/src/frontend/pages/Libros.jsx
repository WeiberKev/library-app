import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/styles/libros.css';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';
import BookCard from '../components/BookCard';

const categorias = [
  { icono: 'fas fa-magic', nombre: 'Realismo mágico', ruta: '/libros?categoria=realismo mágico' },
  { icono: 'fas fa-heart', nombre: 'Romántico', ruta: '/libros?categoria=romántico' },
  { icono: 'fas fa-robot', nombre: 'Ciencia Ficción', ruta: '/libros?categoria=ciencia ficción' },
  { icono: 'fas fa-hat-wizard', nombre: 'Fantasía', ruta: '/libros?categoria=fantasía' },
  { icono: 'fas fa-feather-alt', nombre: 'Fábula', ruta: '/libros?categoria=fábula' },
  { icono: 'fas fa-search', nombre: 'Misterio', ruta: '/libros?categoria=misterio' },
  { icono: 'fas fa-scroll', nombre: 'Clásico', ruta: '/libros?categoria=clásico' },
  { icono: 'fas fa-skull', nombre: 'Terror', ruta: '/libros?categoria=terror' },
  { icono: 'fas fa-landmark', nombre: 'Épico', ruta: '/libros?categoria=épico' }
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Libros() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = useQuery();
  const search = query.get('search') || '';

  useEffect(() => {
    fetch('http://localhost:8080/libros')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los libros');
        return res.json();
      })
      .then(data => {
        setBooks(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filtrado por categoría y por búsqueda
  const filteredBooks = books.filter(book => {
    const matchesCategory =
      selectedCategory === 'Todos' || book.categoria?.nombre === selectedCategory;
    const matchesSearch =
      !search ||
      book.titulo.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app-container">
      <HeaderFront />

      <main className="main-content">
        <section className="books-gallery container py-5">
          <div className="gallery-header text-center mb-4">
            <h2 className="section-title fw-bold">Galería de Libros</h2>
            <p className="section-subtitle text-secondary">Explora nuestra colección completa</p>
          </div>

          <div className="gallery-filters d-flex justify-content-center mb-4 flex-wrap gap-2">
            <button
              className={`btn btn-outline-primary ${selectedCategory === 'Todos' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Todos')}
            >
              Todos
            </button>
            {categorias.map(cat => (
              <button
                key={cat.nombre}
                className={`btn btn-outline-primary ${selectedCategory === cat.nombre ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.nombre)}
              >
                <i className={`${cat.icono} me-1`}></i>
                {cat.nombre}
              </button>
            ))}
          </div>

          {loading && <p>Cargando libros...</p>}
          {error && <p className="text-danger">{error}</p>}

          <div className="row g-4 justify-content-center">
            {filteredBooks.length === 0 && !loading && (
              <p className="text-center">No se encontraron libros.</p>
            )}
            {filteredBooks.map((book) => (
              <div className="col-12 col-sm-6 col-lg-4" key={book.id}>
                <BookCard libro={book} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Libros;