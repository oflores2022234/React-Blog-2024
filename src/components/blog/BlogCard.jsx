/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../styles/blogCard.css'; // Importa el archivo CSS

export const BlogCard = ({ blogs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [comments, setComments] = useState(Array(blogs.length).fill([]));
  const [showCommentForm, setShowCommentForm] = useState(Array(blogs.length).fill(false));

  const handleExpandClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleCommentButtonClick = (index) => {
    // Abre la ventana emergente para agregar comentario
    const newShowCommentForm = [...showCommentForm];
    newShowCommentForm[index] = true;
    setShowCommentForm(newShowCommentForm);
  };

  const handleViewCommentsButtonClick = (index) => {
    // Abre la ventana emergente para ver los comentarios
    const commentText = comments[index].map((comment, i) => (
      `${comment.name} dice: "${comment.text}"`
    ));
    alert(commentText.join('\n'));
  };

  const handleCommentSubmit = (index, name, comment) => {
    // Maneja el envío del comentario
    const newComments = [...comments];
    if (!Array.isArray(newComments[index])) {
      newComments[index] = []; // Inicializa como una matriz vacía si no está definida como una matriz
    }
    newComments[index] = [...newComments[index], { name, text: comment }];
    setComments(newComments);

    // Cierra el formulario de comentarios
    const newShowCommentForm = [...showCommentForm];
    newShowCommentForm[index] = false;
    setShowCommentForm(newShowCommentForm);
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
              {showCommentForm[index] ? (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.elements.name.value;
                  const comment = e.target.elements.comment.value;
                  handleCommentSubmit(index, name, comment);
                }}>
                  <input type="text" name="name" placeholder="Nombre" /><br />
                  <textarea name="comment" placeholder="Comentario"></textarea><br />
                  <button type="submit">Enviar comentario</button>
                </form>
              ) : (
                <button onClick={() => handleCommentButtonClick(index)} className="btn btn-primary">Comentar</button>
              )}
              <button onClick={() => handleViewCommentsButtonClick(index)} className="btn btn-info">Ver comentarios</button>
            </div>
          ) : (
            <button onClick={() => handleExpandClick(index)} className="btn btn-info">Ver más</button>
          )}
        </div>
      ))}
    </div>
  );
};