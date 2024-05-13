/* eslint-disable no-useless-catch */
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.31.113:8080/opinionControl/v1',
    timeout: 2000
})

export const getBlogs = async () => {
    try{
        return await apiClient.get('/posting')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getComentarios = async () => {
    try{
        return await apiClient.get('/comment')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const postComentarios = async (data) => {
    try {
        return await apiClient.post('/comment/add', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

