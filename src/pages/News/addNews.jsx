import React, { useState, useEffect } from 'react';
import api from '../../services/api.js';
import { useNavigate } from 'react-router-dom';

const AddNews = () => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        author: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = api.post('/news', formData);
          console.log('News created:', response.data);
          navigate(-1)
        } catch (error) {
          console.error('Error creating news:', error);
        }
    };

    return (
        <div>
            <h1>Adicionar noticia</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Titulo:
                    <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Noticia:
                    <input
                    type="text"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Autor:
                    <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddNews