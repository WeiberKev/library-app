import axios from 'axios';

const API_URL = 'http://localhost:8080/api/categorias';

export const obtenerCategorias = async () => {
    try {
        const respuesta = await axios.get(API_URL);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener categorías:', error.response?.data || error.message);
        throw error;
    }
};

export const guardarCategoria = async (categoria) => {
    try {
        const respuesta = await axios.post(API_URL, categoria);
        return respuesta.data;
    } catch (error) {
        console.error('Error al guardar categoría:', error.response?.data || error.message);
        throw error;
    }
};

export const eliminarCategoria = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        console.log('Categoría eliminada correctamente');
    } catch (error) {
        console.error('Error al eliminar categoría:', error.response?.data || error.message);
        throw error;
    }
};