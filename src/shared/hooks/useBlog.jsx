/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast from "react-hot-toast";
import { getBlogs as getBlogsRequest} from '../..services/api';


export const useBlog = () => {
    const  [blogs, setBlogs] = useState([]);

    const obtenerBlogs = async () => {
        const blogData = await getBlogsRequest();
        if(blogData.error){
            return toast.error(
                blogData.e.response?.data || "Error al obtener los blogs"
            )
        }
        setBlogs(blogData.data)

        return blogData.data;
    }
    
}

