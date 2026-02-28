import React, { useEffect, useState } from 'react';

export default function AdmonLibros() {
  const [books, setBooks] = useState([]);
  const [autores, setAutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [nombre, setNombre] = useState('');
  const [autorId, setAutorId] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    cargarLibros();
    fetch('http://localhost:8080/api/autores')
      .then(res => res.json())
      .then(data => setAutores(data))
      .catch(() => setError('Error al cargar autores'));

    fetch('http://localhost:8080/api/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(() => setError('Error al cargar categorías'));
  }, []);

  const cargarLibros = () => {
    setLoading(true);
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
  };

  const resetFormulario = () => {
    setNombre('');
    setAutorId('');
    setCategoriaId('');
    setImagenUrl('');
    setEditando(null);
    setError(null);
    setSuccess(null);
  };

  const handleEdit = (libro) => {
    setNombre(libro.nombre);
    setAutorId(libro.autor?.id || '');
    setCategoriaId(libro.categoria?.id || '');
    setImagenUrl(libro.imagenUrl || '');
    setEditando(libro.id);
    setError(null);
    setSuccess(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este libro?')) {
      setLoading(true);
      fetch(`http://localhost:8080/libros/${id}`, { method: 'DELETE' })
        .then(res => {
          if (!res.ok) throw new Error('Error al eliminar el libro');
          setSuccess('Libro eliminado correctamente');
          cargarLibros();
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!nombre || !autorId || !categoriaId) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const libro = {
      nombre,
      autor: { id: Number(autorId) },
      categoria: { id: Number(categoriaId) },
      imagenUrl,
    };

    const url = editando
      ? `http://localhost:8080/libros/${editando}`
      : 'http://localhost:8080/libros';
    const method = editando ? 'PUT' : 'POST';

    setLoading(true);
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(libro),
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al guardar el libro');
        setSuccess(editando ? 'Libro actualizado correctamente' : 'Libro agregado correctamente');
        cargarLibros();
        resetFormulario();
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container py-4 bg-light rounded">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">
          📚 Gestión de Libros
          {editando && <span className="badge bg-warning text-dark ms-3">Editando</span>}
        </h2>
        <button className="btn btn-success" onClick={resetFormulario} type="button">
          {editando ? 'Cancelar edición' : '+ Crear Libro'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="row g-3 mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del libro"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={autorId}
            onChange={(e) => setAutorId(e.target.value)}
            required
            disabled={loading}
          >
            <option value="">Seleccione autor</option>
            {autores.map(a => (
              <option key={a.id} value={a.id}>{a.nombre}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            required
            disabled={loading}
          >
            <option value="">Seleccione categoría</option>
            {categorias.map(c => (
              <option key={c.id} value={c.id}>{c.nombre}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="URL de la imagen"
            value={imagenUrl}
            onChange={(e) => setImagenUrl(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {editando ? 'Guardar' : 'Agregar'}
          </button>
        </div>
      </form>

      {loading && <div className="alert alert-info py-2">Cargando...</div>}
      {error && <div className="alert alert-danger py-2">{error}</div>}
      {success && <div className="alert alert-success py-2">{success}</div>}

      <div className="row g-4">
        {books.map((book) => (
          <div className="col-md-4" key={book.id}>
            <div className="card shadow-sm h-100">
              <img
                src={book.imagenUrl || 'https://placehold.co/220x260?text=Libro'}
                alt={book.nombre || 'Sin título'}
                className="card-img-top"
                style={{ height: 220, objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.nombre || 'Sin título'}</h5>
                <p><strong>Autor:</strong> {book.autor?.nombre}</p>
                <p><strong>Categoría:</strong> {book.categoria?.nombre}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleEdit(book)}
                  disabled={loading}
                >
                  <i className="fas fa-pen"></i> Editar
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(book.id)}
                  disabled={loading}
                >
                  <i className="fas fa-trash"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
