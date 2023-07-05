import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: '',
    year: '',
    rating: '',
    type: '',
    gender: '',
    plot: '',
    fullplot: '',
    directors: ''
  });

  useEffect(() => {
    api.get(`/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie:', error);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.patch(`/movies/${id}`, movie);
      console.log('Movie updated');
      navigate(-1);
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  return (
    <div>
      <h1>Alterar filme</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={movie.year}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="text"
            name="rating"
            value={movie.rating}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={movie.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={movie.gender}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Plot:
          <input
            type="text"
            name="plot"
            value={movie.plot}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Full plot:
          <input
            type="text"
            name="fullplot"
            value={movie.fullplot}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Directors:
          <input
            type="text"
            name="directors"
            value={movie.directors}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
