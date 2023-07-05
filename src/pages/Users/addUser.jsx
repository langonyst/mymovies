import React, {useState, useEffect} from 'react'
import api from '../../services/api.js'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
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
          const response = api.post('/users', formData);
          console.log('User created:', response.data);
          navigate(-1)
        } catch (error) {
          console.error('Error creating user:', error);
        }
    };

    return (
        <div>
            <h1>Adicionar Usuário</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Username:
                    <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUser