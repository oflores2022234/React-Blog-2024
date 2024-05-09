export const BlogCard = ({ blogs }) => {
    console.log('blogs en BlogCard:', blogs);
  
    return (
      <div>
        {blogs.map((blog, index) => (
          <div key={index}>
            <div>
              <label>Título:</label>
              <div>{blog.titulo}</div>
            </div>
            <div>
              <label>Categoría:</label>
              <div>{blog.categoria}</div>
            </div>
            <div>
              <label>Texto:</label>
              <div>{blog.texto}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };