/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { BlogCard } from '../../components/blog/BlogCard'
import { getBlogs } from '../../services/'

export const DashbordPage = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        console.log('Datos obtenidos:', response.data); // Verificar los datos obtenidos
        if (!response.error) {
          setBlogs(response.data.publication || []);
          console.log('blogs actualizados:', response.data.publication); // Verificar los blogs actualizados
        } else {
          console.log('Error:', response.data);
        }
      } catch (error) {
        console.log('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogCard blogs={blogs}/>
  )
}