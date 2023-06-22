import React, { useState, useEffect } from 'react';
import api from '../../services/api.js'

const Users = () => {
    const [users, setUser] = useState([]);

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

    return (
        <div className="posts-container">
            {users.map((user) => {
                return (
                    <div className="post-card" key={user._id}>
                        <h2 className="post-title">{user.name}</h2>
                        <p className="post-body">{user.email}</p>
                            <div className="button">
                                <div className="delete-btn">Delete</div>
                            </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Users