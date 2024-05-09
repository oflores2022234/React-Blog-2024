/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../styles/blogCard.css'; // Importa el archivo CSS

export const BlogCard = ({ blogs }) => {
  console.log('blogs en BlogCard:', blogs);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="blog-card-container"> {/* Agrega un contenedor para las cartas de blog */}
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card"> {/* Agrega la clase "blog-card" */}
          <div>
            <img src={blog.imagenUrl} alt="Imagen del blog" /> {/* Muestra la imagen */}
          </div>
          <div>
            <label>Título:</label>
            <div>{blog.titulo}</div>
          </div>
          <div>
            <label>Categoría:</label>
            <div>{blog.categoria}</div>
          </div>
          <div>
            <label>Github:</label>
            <div><a href={blog.gitHub}>Ver en GitHub</a></div> {/* Enlace a GitHub */}
          </div>
          {expandedIndex === index ? ( 
            <div>
              <label>Texto:</label>
              <div>{blog.texto}</div>
            </div>
          ) : (
            <button onClick={() => handleExpandClick(index)}>Ver más</button>
          )}
        </div>
      ))}
    </div>
  );
};