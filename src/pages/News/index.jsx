import React, { useState, useEffect } from 'react';
import api from '../../services/api.js'

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        api.get('/news')
            .then((response) => {
                console.log(response)
                setNews(response.data)
            })
            .catch((err) => {
                console.error('Error' + err)
            })
    }, [])

    return (
        <div className="posts-container">
            {news.map((notice) => {
                return (
                    <div className="post-card" key={notice.id}>
                        <h2 className="post-title">{notice.title}</h2>
                        <p className="post-body">{notice.body}</p>
                        <p className="post-body">{notice.author}</p>
                            <div className="button">
                                <div className="delete-btn">Delete</div>
                            </div>
                    </div>
                );
            })}
        </div>
    )
}

export default News