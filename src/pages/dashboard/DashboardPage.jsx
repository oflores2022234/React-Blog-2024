/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BlogCard } from '../../components/blog/BlogCard';
import { Navbar } from '../../components/navbar/Navbar';
import { getBlogs } from '../../services/';

export const DashboardPage = () => {
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

  const handleCommentClick = (publicacionId) => {
    // Aquí puedes hacer lo que necesites con el ID de la publicación, como redirigir a la página de comentarios
    console.log('Publicación ID:', publicacionId);
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <BlogCard blogs={blogs} onCommentClick={handleCommentClick} />
    </div>
  );
};