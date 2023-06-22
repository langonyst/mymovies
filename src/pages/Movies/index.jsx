import React, { useState, useEffect } from 'react';
import api from '../../services/api.js'

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.get('/movies')
            .then((response) => {
                console.log(response)
                setMovies(response.data)
            })
            .catch((err) => {
                console.error('Error' + err)
            })
    }, [])

    return (
        <div className="posts-container">
            {movies.map((movie) => {
                return (
                    <div className="post-card" key={movie.id}>
                        <h2 className="post-title">{movie.title}</h2>
                        <p className="post-body">{movie.plot}</p>
                            <div className="button">
                                <div className="delete-btn">Delete</div>
                            </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Movies