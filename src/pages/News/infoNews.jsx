import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const InfoNews = () => {

    const { id } = useParams();

    const [news, setNews] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        console.log(id)
        api.get(`/news/${id}`)
            .then((response) => {
                console.log(response)
                setNews(response.data)
            })
            .catch((err) => {
                console.error('Error' + err)
            })
    }, [])

    const handleClick = () => {
        navigate(`/update-news/${id}`)
    }

    const handleDelete = async () => {
        try{
            const response = await api.delete(`/news/${id}`);
            console.log('News deleted');
            navigate(-1);
        }catch(error){
            console.error('Error ', error);
        }
    }

    return (
        <div>
            <h1>{news.title}</h1>
            <p>
                <button onClick={handleClick}>Alterar registro</button>
            </p>
            <p>
                <button onClick={handleDelete}>Deletar registro</button>
            </p>
            <p>Content: {news.body}</p>
            <p>Author: {news.author}</p>
        </div>
    )
}

export default InfoNews