import React, { useState, useEffect} from 'react'
import api from '../../services/api.js'
import { Link } from 'react-router-dom';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [news, setNews] = useState([]);
    const [users, setUsers] = useState([])

    useEffect(() => {
        api.get('/news').then((response) => {
            setNews(response.data)
        }).catch((err) => console.error(err))
        api.get('/movies').then((response) => {
            setMovies(response.data)
        }).catch((err) => console.error(err))
        api.get('/users').then((response) => {
            setUsers(response.data)
        }).catch((err) => console.error(err))
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <h2>Movies:</h2>
            {movies.map((movie) => (
                <div key={movie._id}>
                    <h3><Link to={`/info-movie/${movie._id}`}>{movie.title}</Link></h3>
                    <p>{movie.plot}</p>
                </div>
            ))}

            <h2>News:</h2>
            {news.map((notice) => (
                <div key={notice._id}>
                    <h3><Link to={`/info-news/${notice._id}`}>{notice.title}</Link></h3>
                    <p>{notice.author}</p>
                </div>
            ))}

            <h2>Users:</h2>
            {users.map((user) => (
                <div key={user._id}>
                    <h3><Link to={`/info-user/${user._id}`}>{user.name}</Link></h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Home