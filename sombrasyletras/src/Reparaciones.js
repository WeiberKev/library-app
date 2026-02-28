import axios from 'axios';

const API_URL = 'http://localhost:8080/api/reparaciones';

export const obtenerReparaciones = async () => {
    try {
        const respuesta = await axios.get(API_URL);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener reparaciones:', error.response?.data || error.message);
        throw error;
    }
};

export const guardarReparacion = async (reparacion) => {
    try {
        const respuesta = await axios.post(API_URL, reparacion);
        return respuesta.data;
    } catch (error) {
        console.error('Error al guardar reparación:', error.response?.data || error.message);
        throw error;
    }
};

export const eliminarReparacion = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        console.log('Reparación eliminada correctamente');
    } catch (error) {
        console.error('Error al eliminar reparación:', error.response?.data || error.message);
        throw error;
    }
};