import { Link } from 'react-router-dom';
import '../../assets/styles/categoria.css';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';

const categorias = [
  {
    icono: 'fas fa-magic',
    nombre: 'Realismo mágico',
    ruta: '/libros?categoria=realismo mágico',
  },
  {
    icono: 'fas fa-heart',
    nombre: 'Romántico',
    ruta: '/libros?categoria=romántico',
  },
  {
    icono: 'fas fa-robot',
    nombre: 'Ciencia Ficción',
    ruta: '/libros?categoria=ciencia ficción',
  },
  {
    icono: 'fas fa-hat-wizard',
    nombre: 'Fantasía',
    ruta: '/libros?categoria=fantasía',
  },
  {
    icono: 'fas fa-feather-alt',
    nombre: 'Fábula',
    ruta: '/libros?categoria=fábula',
  },
  {
    icono: 'fas fa-search',
    nombre: 'Misterio',
    ruta: '/libros?categoria=misterio',
  },
  {
    icono: 'fas fa-scroll',
    nombre: 'Clásico',
    ruta: '/libros?categoria=clásico',
  },
  {
    icono: 'fas fa-skull',
    nombre: 'Terror',
    ruta: '/libros?categoria=terror',
  },
  {
    icono: 'fas fa-landmark',
    nombre: 'Épico',
    ruta: '/libros?categoria=épico',
  }
];

function Categoria() {
  return (
    <div className="app-container">

      <HeaderFront />  
      <main className="main-content">
        <section className="categories">
          <h2>Explora por Categorías</h2>
          <div className="categories-grid">
            {categorias.map((cat, index) => (
              <Link to={cat.ruta} className="category-card" key={index}>
                <i className={cat.icono}></i>
                <h3>{cat.nombre}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Categoria;
