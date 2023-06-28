import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

const InfoNews = () => {

    const { id } = useParams();

    const [news, setNews] = useState([]);

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

    return (
        <div>
            <h1>{news.title}</h1>
            <p>Content: {news.body}</p>
            <p>Author: {news.author}</p>
        </div>
    )
}

export default InfoNews