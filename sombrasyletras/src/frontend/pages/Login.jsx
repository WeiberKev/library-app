import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/auth.css';
import { API_BASE_URL } from '../../config';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/usuarios/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const msg = await response.text();
        alert(`Error: ${msg}`);
        return;
      }

      const user = await response.json();
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Inicio de sesión exitoso');
      navigate(user.role === 'admin' ? '/admin' : '/cliente');
    } catch (error) {
      alert('Error al iniciar sesión');
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: '100%' }}>
        <h2 className="text-center mb-4 fw-bold text-primary">Iniciar Sesión</h2>
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
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            <i className="fas fa-sign-in-alt me-2"></i>Entrar
          </button>
        </form>
      </div>
    </div>
  );
}