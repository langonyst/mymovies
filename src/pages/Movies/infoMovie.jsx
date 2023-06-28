import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

const InfoMovie = () => {

    const { id } = useParams();

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

    return (
        <div>
            <h1>Info Movie: {movie.title}</h1>
            <p>Full plot: {movie.fullplot}</p>
            <p>Released: {movie.released}</p>
            <p>Director: {movie.directors}</p>
        </div>
    )
}

export default InfoMovie