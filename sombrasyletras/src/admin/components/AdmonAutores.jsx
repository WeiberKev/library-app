import React, { useEffect, useState } from 'react';

export default function AdminAutores() {
  const [autores, setAutores] = useState([]);
  const [nombre, setNombre] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [biografia, setBiografia] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [genero, setGenero] = useState('');
  const [obraDestacada, setObraDestacada] = useState('');
  const [editando, setEditando] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const API_URL = 'http://localhost:8080/api/autores';

  useEffect(() => {
    cargarAutores();
  }, []);

  const cargarAutores = () => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setAutores(data))
      .catch(() => setError('Error al cargar autores'))
      .finally(() => setLoading(false));
  };

  const resetFormulario = () => {
    setNombre('');
    setNacionalidad('');
    setBiografia('');
    setImagenUrl('');
    setGenero('');
    setObraDestacada('');
    setEditando(null);
    setError(null);
    setSuccess(null);
  };

  const handleEdit = (autor) => {
    setNombre(autor.nombre);
    setNacionalidad(autor.nacionalidad);
    setBiografia(autor.biografia);
    setImagenUrl(autor.imagenUrl);
    setGenero(autor.genero);
    setObraDestacada(autor.obraDestacada);
    setEditando(autor.id);
    setError(null);
    setSuccess(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este autor?')) {
      setLoading(true);
      fetch(`${API_URL}/${id}`, { method: 'DELETE' })
        .then(() => {
          setSuccess('Autor eliminado correctamente');
          cargarAutores();
        })
        .catch(() => setError('Error al eliminar autor'))
        .finally(() => setLoading(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const autor = { nombre, nacionalidad, biografia, imagenUrl, genero, obraDestacada };
    const url = editando ? `${API_URL}/${editando}` : API_URL;
    const method = editando ? 'PUT' : 'POST';

    setLoading(true);
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(autor),
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al guardar');
        setSuccess(editando ? 'Autor actualizado' : 'Autor creado');
        cargarAutores();
        resetFormulario();
      })
      .catch(() => setError('Error al guardar autor'))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">✍️ Gestión de Autores</h2>

      <form className="row g-3 mb-4" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
        </div>
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Nacionalidad" value={nacionalidad} onChange={e => setNacionalidad(e.target.value)} required />
        </div>
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Género" value={genero} onChange={e => setGenero(e.target.value)} />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Obra Destacada" value={obraDestacada} onChange={e => setObraDestacada(e.target.value)} />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="URL Imagen" value={imagenUrl} onChange={e => setImagenUrl(e.target.value)} />
        </div>
        <div className="col-12">
          <textarea className="form-control" rows="2" placeholder="Biografía" value={biografia} onChange={e => setBiografia(e.target.value)}></textarea>
        </div>
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">{editando ? 'Actualizar' : 'Agregar'}</button>
          {editando && <button type="button" onClick={resetFormulario} className="btn btn-secondary ms-2">Cancelar</button>}
        </div>
      </form>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="row g-4">
        {autores.map(autor => (
          <div className="col-md-4" key={autor.id}>
            <div className="card h-100 shadow-sm">
              <img src={autor.imagenUrl || 'https://via.placeholder.com/220x260?text=Autor'} alt={autor.nombre} className="card-img-top" style={{ height: 260, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{autor.nombre}</h5>
                <p><strong>Nacionalidad:</strong> {autor.nacionalidad}</p>
                {autor.genero && <p><strong>Género:</strong> {autor.genero}</p>}
                {autor.obraDestacada && <p><strong>Obra:</strong> {autor.obraDestacada}</p>}
                <p className="small text-muted">{autor.biografia?.substring(0, 100)}...</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-outline-primary btn-sm" onClick={() => handleEdit(autor)}>Editar</button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(autor.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
