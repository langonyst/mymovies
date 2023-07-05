import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const InfoMovie = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        console.log(id)
        api.get(`/movies/${id}`)
            .then((response) => {
                console.log(response)
                setMovie(response.data)
            })
            .catch((err) => {
                console.error('Error' + err)
            })
    }, [])

    const handleClick = () => {
        navigate(`/update-movie/${id}`)
    }

    const handleDelete = async () => {
        try{
            const response = await api.delete(`/movies/${id}`);
            console.log('Sucess!');
            console.log(response.data)
            navigate(-1);
        }catch(error){
            console.error('Error delete movie ', error)
        }
    }

    return (
        <div>
            <h1>Info Movie: {movie.title}</h1>
            <p>
                <button onClick={handleClick}>Alterar registro</button>
            </p>
            <p>
                <button onClick={handleDelete}>Deletar registro</button>
            </p>
            <p>Full plot: {movie.fullplot}</p>
            <p>Released: {movie.year}</p>
            <p>Director: {movie.directors}</p>
        </div>
    )
}

export default InfoMovie