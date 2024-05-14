/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../styles/blogCard.css'; // 

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
   
    const newComments = [...comments];
    if (!Array.isArray(newComments[index])) {
      newComments[index] = []; 
    }
    newComments[index] = [...newComments[index], { name, text: comment }];
    setComments(newComments);

 
    const newShowCommentForm = [...showCommentForm];
    newShowCommentForm[index] = false;
    setShowCommentForm(newShowCommentForm);
  };

  return (
    <div className="blog-card-container"> 
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card"> 
          <div>
            <img src={blog.imagenUrl} alt="Imagen del blog" /> 
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
            <div><a href={blog.gitHub}>Ver en GitHub</a></div> 
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
                <button onClick={() => handleCommentButtonClick(index)} className="blog-card button">Comentar</button>
              )}
              <button onClick={() => handleViewCommentsButtonClick(index)} className="blog-card button">Ver comentarios</button>
            </div>
          ) : (
            <button onClick={() => handleExpandClick(index)} className="blog-card button">Ver más</button>
          )}
        </div>
      ))}
    </div>
  );
};