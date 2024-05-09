/* eslint-disable no-useless-catch */
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/opinionControl/v1',
    timeout: 2000
})

export const getBlogs = async () => {
    try{
        return await apiClient.post('/posting')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

