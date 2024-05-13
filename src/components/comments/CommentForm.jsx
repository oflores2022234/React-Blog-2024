/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Input } from '../Input';
import { usePostComments } from '../../shared/hooks/usePostComments';

export const CommentForm = ({ publicacionId }) => {

    const [nombres, setNombres] = useState('');
    const [email, setEmail] = useState('');
    const [contenido, setContenido] = useState('');

    const { postComentarios, isLoading } = usePostComments();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await postComentarios(nombres, email, contenido, publicacionId);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Nombres"
                value={nombres}
                onChangeHandler={setNombres}
                type="text"
            />
            <Input
                label="Correo Electrónico"
                value={email}
                onChangeHandler={setEmail}
                type="email"
            />
            <Input
                label="Contenido"
                value={contenido}
                onChangeHandler={setContenido}
                type="textarea"
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar Comentario'}
            </button>
        </form>
    );
};