import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '../../assets/styles/home.css';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';
import BookCard from '../components/BookCard';
import AutorCard from '../components/AutorCard';

function Home() {
  const [autores, setAutores] = useState([]);
  const [loading, setLoading] = useState(true);

  const [libros, setLibros] = useState([]);
  const [loadingLibros, setLoadingLibros] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/autores")
      .then((res) => res.json())
      .then((data) => {
        setAutores(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar autores:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/libros")
      .then((res) => res.json())
      .then((data) => {
        setLibros(Array.isArray(data) ? data : []);
        setLoadingLibros(false);
      })
      .catch((error) => {
        console.error("Error al cargar libros:", error);
        setLoadingLibros(false);
      });
  }, []);

  const categorias = [
    { nombre: "Realismo mágico", icono: "fas fa-magic", ruta: "/libros?categoria=realismo mágico" },
    { nombre: "Romántico", icono: "fas fa-heart", ruta: "/libros?categoria=romántico" },
    { nombre: "Ciencia Ficción", icono: "fas fa-robot", ruta: "/libros?categoria=ciencia ficción" },
    { nombre: "Fantasía", icono: "fas fa-hat-wizard", ruta: "/libros?categoria=fantasía" },
    { nombre: "Misterio", icono: "fas fa-search", ruta: "/libros?categoria=misterio" },
    { nombre: "Clásico", icono: "fas fa-scroll", ruta: "/libros?categoria=clásico" },
  ];

  

  return (
    <div className="app-container">
      <HeaderFront />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero py-5" style={{ background: "#e3f2fd" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                <h2 className="fw-bold mb-3 display-5 text-primary">Explora nuestro catálogo de libros</h2>
                <p className="mb-4 fs-5 text-secondary">
                  Miles de títulos, autores y géneros para descubrir tu próxima lectura favorita.
                </p>
                <div className="search-bar d-flex justify-content-center justify-content-lg-start mb-4">
                  <input
                    type="text"
                    className="form-control w-auto me-2 shadow"
                    placeholder="Buscar libros..."
                    style={{ maxWidth: 350, minWidth: 200, fontSize: "1.1rem" }}
                  />
                  <button className="btn btn-primary search-btn px-4">
                    <i className="fas fa-search"></i> Buscar
                  </button>
                </div>
                <Link to="/prestamos" className="btn btn-outline-primary reserve-btn">
                  <i className="fas fa-calendar-plus"></i> Reservar tu libro
                </Link>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
                  alt="Librería"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: 320, objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categorías populares */}
        <section className="categorias-populares py-4">
          <h3 className="text-center mb-4 fw-semibold">Categorías populares</h3>
          <div className="container">
            <div className="row justify-content-center">
              {categorias.map((cat, idx) => (
                <div className="col-6 col-md-4 col-lg-2 mb-3" key={idx}>
                  <Link to={cat.ruta} className="d-flex flex-column align-items-center text-decoration-none text-dark category-home-card py-3 rounded shadow-sm h-100">
                    <i className={`${cat.icono} fa-2x mb-2`} aria-label={cat.nombre}></i>
                    <span className="fw-medium">{cat.nombre}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Libros destacados en carrusel */}
        <section className="featured-books py-5">
          <h2 className="fw-bold text-center mb-4">Libros destacados</h2>
          {loadingLibros ? (
            <p className="text-center">Cargando libros...</p>
          ) : (
            <Swiper
              modules={[Navigation, Scrollbar]}
              navigation
              scrollbar={{ draggable: true }}
              spaceBetween={32} // Aumenta la separación entre slides
              slidesPerView={2}
              breakpoints={{
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1200: { slidesPerView: 5 }
              }}
              style={{ padding: '0 20px' }}
            >
              {libros.map((libro) => (
                <SwiperSlide key={libro.id}>
                  <div className="mx-2 h-100 d-flex align-items-stretch">
                    <BookCard libro={libro} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>

        {/* Autores en carrusel */}
        <section className="autores-section py-5">
          <h2 className="fw-bold text-center mb-4">Autores</h2>
          {loading ? (
            <p className="text-center">Cargando autores...</p>
          ) : (
            <Swiper
              modules={[Navigation, Scrollbar]}
              navigation
              scrollbar={{ draggable: true }}
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                576: { slidesPerView: 2.2 },
                768: { slidesPerView: 3.2 },
                1200: { slidesPerView: 4.2 }
              }}
              style={{ padding: '0 20px' }}
            >
              {autores.map((autor) => (
                <SwiperSlide key={autor.id}>
                  <AutorCard autor={autor} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;