import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/auth.css';
import { API_BASE_URL } from '../../config';

export default function Registro() {
  const [form, setForm] = useState({ username: '', password: '', role: 'cliente' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/usuarios/registro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const msg = await response.text();
        alert(`Error: ${msg}`);
        return;
      }

      alert('Registro exitoso');
      navigate('/login');
    } catch (error) {
      alert('Error en el registro');
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: '100%' }}>
        <h2 className="text-center mb-4 fw-bold text-primary">Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="username"
              className="form-control"
              placeholder="Usuario"
              onChange={handleChange}
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <select
              name="role"
              className="form-select"
              onChange={handleChange}
              value={form.role}
            >
              <option value="cliente">Cliente</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            <i className="fas fa-user-plus me-2"></i>Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}