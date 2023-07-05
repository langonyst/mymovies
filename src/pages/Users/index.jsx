import React, { useState, useEffect } from 'react';
import api from '../../services/api.js'
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUser] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        api.get('/users')
            .then((response) => {
                console.log(response)
                setUser(response.data)
            })
            .catch((err) => {
                console.error('Error' + err)
            })
    }, [])

    const handleClick = () => {
        navigate('/add-user')
    }

    return (
        <div className="posts-container">
            <h1>Usuários:</h1>
            <p>
                <button onClick={handleClick}>Adicionar usuário</button>
            </p>
            {users.map((user) => {
                return (
                    <div className="post-card" key={user._id}>
                        <h2 className="post-title"><Link to={`/info-user/${user._id}`}>{user.name}</Link></h2>
                        <p className="post-body">{user.email}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Users