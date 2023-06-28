import React, { useState, useEffect } from 'react';
import api from '../../services/api.js';
import { Link } from 'react-router-dom';
import SearchComponent from '../../components/SearchComponent/Search.jsx';

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
            <h1>Movies:</h1>
            <SearchComponent />
            {movies.map((movie) => {
                return (
                    <div className="post-card" key={movie._id}>
                        <h2 className="post-title"><Link to={`/info-movie/${movie._id}`}>{movie.title}</Link></h2>
                        <p className="post-body">{movie.plot}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Movies