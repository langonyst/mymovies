import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api.js';

const UpdateNews = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const [news, setNews] = useState({
      title: '',
      body: '',
      author: ''
    });
  
    useEffect(() => {
      api.get(`/news/${id}`)
        .then(response => {
            setNews(response.data);
        })
        .catch(error => {
          console.error('Error fetching news:', error);
        });
    }, [id]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setNews(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await api.patch(`/news/${id}`, news);
        console.log('News updated');
        navigate(-1);
      } catch (error) {
        console.error('Error updating news:', error);
      }
    };
    return(
        <div>
            <h1>Atualizar noticia</h1>
            <form onSubmit={handleSubmit}>
        <label>
          Titulo:
          <input
            type="text"
            name="title"
            value={news.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Corpo:
          <input
            type="text"
            name="body"
            value={news.body}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Autor:
          <input
            type="text"
            name="author"
            value={news.author}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
         </form>
        </div>
    )
}

export default UpdateNews