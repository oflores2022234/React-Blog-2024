import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { postComentarios as postComentariosRequest } from "../../services/api";
import toast from "react-hot-toast";

export const usePostComments = () => {
  const [isLoading, setIsLoading] = useState(false);
  //const navigate = useNavigate();

  const postComentarios = async (nombres, email, contenido, publicacionId) => {
    setIsLoading(true);

    const response = await postComentariosRequest({
      nombres,
      email,
      contenido,
      publicacionId,
    });

    setIsLoading(false);
    if (response.error) {
      return toast.error(
        response.e?.response?.data || 'Ocurrió un error al enviar el comentario'
      );
    }
  };

  return {
    postComentarios,
    isLoading
  };
};