import axios from 'axios';

const API_URL = 'http://localhost:8080/api/prestamos-libros';

export const obtenerPrestamosLibros = async () => {
    try {
        const respuesta = await axios.get(API_URL);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener préstamos de libros:', error.response?.data || error.message);
        throw error;
    }
};

export const guardarPrestamoLibro = async (prestamoLibro) => {
    try {
        const respuesta = await axios.post(API_URL, prestamoLibro);
        return respuesta.data;
    } catch (error) {
        console.error('Error al registrar préstamo de libro:', error.response?.data || error.message);
        throw error;
    }
};

export const eliminarPrestamoLibro = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        console.log('Préstamo de libro eliminado correctamente');
    } catch (error) {
        console.error('Error al eliminar préstamo de libro:', error.response?.data || error.message);
        throw error;
    }
};