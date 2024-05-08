/* eslint-disable no-useless-catch */
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/opinionControl/v1',
    timeout: 2000
})

export const getAllPosts = async () => {
    try {
      const response = await apiClient.get('/posting/add'); // Ruta para obtener todas las publicaciones
      return response.data; // Retorna los datos de las publicaciones
    } catch (error) {
      throw error; // Manejo de errores
    }
  };

