import axios from 'axios';

const API_URL = 'http://localhost:8080/api/autores';

export const obtenerAutores = async () => {
    try {
        const respuesta = await axios.get(API_URL);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener autores:', error.response?.data || error.message);
        throw error;
    }
};

export const guardarAutor = async (autor) => {
    try {
        const respuesta = await axios.post(API_URL, autor);
        return respuesta.data;
    } catch (error) {
        console.error('Error al guardar autor:', error.response?.data || error.message);
        throw error;
    }
};

export const eliminarAutor = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        console.log('Autor eliminado correctamente');
    } catch (error) {
        console.error('Error al eliminar autor:', error.response?.data || error.message);
        throw error;
    }
};