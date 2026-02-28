import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from './config';
import { Link } from 'react-router-dom';

function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
      axios.get(`${API_BASE_URL}/libros`)
    .then(response => {
        console.log('Respuesta de la API:', response.data); // <-- Agrega esto
        setLibros(response.data);
    })
    .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Lista de Libros</h1>
            <ul>
                {libros.map(libro => (
                    <li key={libro.id}>{libro.titulo}
                    <Link to={`/libros/${libro.id}`}>{libro.id}</Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}

export default Libros;