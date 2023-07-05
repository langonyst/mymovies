import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';

const News = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    api.get('/news').then((response) => {
      setNews(response.data)
    }).catch((error) => {
      console.error('Error ', error)
    })
  }, [])

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    console.log(searchResults)
  }, [searchResults])

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchText) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.post('/news/search', { title: searchText });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    navigate('/add-news')
  }

  return (
    <div className="posts-container">
      <h1>News:</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
      <p>
        <button onClick={handleClick}>Adicionar Noticia</button>
      </p>
      {(searchResults.length > 0 ? searchResults : news).map((notice) => (
        <div className="post-card" key={notice._id}>
          <h2 className="post-title"><Link to={`/info-news/${notice._id}`}>{notice.title}</Link></h2>
          <p className="post-body">{notice.author}</p>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default News;
