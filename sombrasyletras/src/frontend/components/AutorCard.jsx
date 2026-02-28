import { Link } from 'react-router-dom';

export default function AutorCard({ autor }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={autor.imagenUrl || 'https://via.placeholder.com/220x260?text=Autor'}
        alt={autor.nombre}
        className="card-img-top object-fit-cover"
        style={{ height: 260 }}
      />
      <div className="card-body text-center">
        <h3 className="card-title mb-1">{autor.nombre}</h3>
        <p className="mb-1 text-muted">{autor.nacionalidad}</p>
        {autor.genero && <span className="badge bg-primary mb-2">{autor.genero}</span>}
        {autor.obraDestacada && (
          <p className="mb-0">
            <Link to="/libros" className="link-primary text-decoration-none">{autor.obraDestacada}</Link>
          </p>
        )}
      </div>
    </div>
  );
}
