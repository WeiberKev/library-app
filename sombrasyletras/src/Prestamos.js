import axios from 'axios';

const API_URL = 'http://localhost:8080/prestamos';

export const obtenerPrestamos = async () => {
    try {
        const respuesta = await axios.get(API_URL);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener préstamos:', error.response?.data || error.message);
        throw error;
    }
};

export const guardarPrestamo = async (prestamo) => {
    try {
        const respuesta = await axios.post(API_URL, prestamo);
        return respuesta.data;
    } catch (error) {
        console.error('Error al guardar préstamo:', error.response?.data || error.message);
        throw error;
    }
};

export const eliminarPrestamo = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        console.log('Préstamo eliminado correctamente');
    } catch (error) {
        console.error('Error al eliminar préstamo:', error.response?.data || error.message);
        throw error;
    }
};