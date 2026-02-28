import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderFront from '../components/HeaderFront';
import Footer from '../components/Footer';
import { API_BASE_URL } from '../config';

function Prestamos() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/prestamos/usuario/${user.id}`)
      .then(res => res.json())
      .then(setPrestamos)
      .catch(err => console.error('Error al cargar préstamos', err));
  }, [user.id]);

  {prestamos.length > 0 && (
  <div className="mt-5">
    <h4 className="fw-bold mb-3">Tus préstamos actuales</h4>
    <ul className="list-group">
      {prestamos.map(p => (
        <li key={p.id} className="list-group-item">
          📘 <strong>{p.libro?.titulo}</strong> | Desde: {p.fechaPrestamo} | Hasta: {p.fechaDevolucion}
        </li>
      ))}
    </ul>
  </div>
)}
