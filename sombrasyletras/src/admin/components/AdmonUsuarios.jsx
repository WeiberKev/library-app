import React, { useState, useEffect } from 'react';

export default function AdmonUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('cliente');
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = () => {
    fetch('http://localhost:8080/api/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Error:', err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = { username, password, rol };
    const url = editandoId
      ? `http://localhost:8080/api/usuarios/${editandoId}`
      : 'http://localhost:8080/api/usuarios/registro';
    const method = editandoId ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario),
    })
      .then(() => {
        cargarUsuarios();
        setUsername('');
        setPassword('');
        setRol('cliente');
        setEditandoId(null);
      })
      .catch(err => console.error('Error:', err));
  };

  const handleEdit = (usuario) => {
    setUsername(usuario.username);
    setPassword(usuario.password);
    setRol(usuario.rol);
    setEditandoId(usuario.id);
  };

  const handleDelete = (id) => {
    if (confirm('¿Eliminar este usuario?')) {
      fetch(`http://localhost:8080/api/usuarios/${id}`, {
        method: 'DELETE'
      })
        .then(() => cargarUsuarios())
        .catch(err => console.error('Error:', err));
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-primary">👤 Administración de Usuarios</h2>

      <form onSubmit={handleSubmit} className="row g-3 mb-4 bg-light p-3 rounded shadow-sm">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={rol}
            onChange={e => setRol(e.target.value)}
          >
            <option value="cliente">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <div className="col-md-1 d-grid">
          <button type="submit" className="btn btn-success">
            {editandoId ? 'Actualizar' : 'Agregar'}
          </button>
        </div>
      </form>

      <table className="table table-bordered table-hover shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>Usuario</th>
            <th>Rol</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.username}</td>
              <td>{usuario.rol}</td>
              <td className="text-center">
                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(usuario)}>✏️</button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(usuario.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



