import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
    const [formData, setFormData] = useState({
        title: '',
        year: '',
        rating: '',
        type: '',
        gender: '',
        plot: '',
        fullplot: '',
        directors: ''
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
          const response = api.post('/movies', formData);
          console.log('Movie created:', response.data);
          navigate(-1)
        } catch (error) {
          console.error('Error creating movie:', error);
        }
    };

    return (
        <div>
            <h1>Adicionar filme</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Year:
                    <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Rating:
                    <input
                    type="text"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Type:
                    <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Gender:
                    <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Plot:
                    <input
                    type="text"
                    name="plot"
                    value={formData.plot}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Full plot:
                    <input
                    type="text"
                    name="fullplot"
                    value={formData.fullplot}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Directors:
                    <input
                    type="text"
                    name="directors"
                    value={formData.directors}
                    onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddMovie;