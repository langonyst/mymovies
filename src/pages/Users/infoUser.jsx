import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api.js';

const InfoUser = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {

        console.log(id)
        api.get(`/users/${id}`)
            .then((response) => {
                console.log(response)
                setUser(response.data)
            })
            .catch((err) => {
                console.error('Error' + err)
            })
    }, [])

    const handleClick = () => {
        navigate(`/update-user/${id}`)
    }

    const handleDelete = async () => {
        try{
            const response = await api.delete(`/users/${id}`);
            console.log('Sucess!');
            console.log(response.data)
            navigate(-1);
        }catch(error){
            console.error('Error delete user ', error)
        }
    }

    return (
        <div>
            <h1>Info User</h1>
            <p>
                <button onClick={handleClick}>Alterar registro</button>
            </p>
            <p>
                <button onClick={handleDelete}>Deletar registro</button>
            </p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default InfoUser