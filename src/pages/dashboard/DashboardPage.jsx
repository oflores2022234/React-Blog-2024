/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { BlogCard } from '../../components/blog/BlogCard'
import { getBlogs } from '../../services/'

export const DashbordPage = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const listaBlogs = async () => {
      try {
        const response = await getBlogs();
        console.log('Respuesta de getBlogs: ', response.data.blogs);
        console.log(response)
        if(!response.error){
          setBlogs(response.data.blogs || []);
        }else {
          console.log('Error', response.data)
        }
      } catch (error) {
        console.log(error);
      }
      console.log('blogs', blogs);
      
    };
    listaBlogs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BlogCard blogs={blogs}/>
  )
}