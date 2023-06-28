import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const News = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      console.log(response)
      console.log(searchText)
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        searchResults && searchResults.map((notice) => (
          <div className="post-card" key={notice._id}>
            <h2 className="post-title"><Link to={`/info-news/${notice._id}`}>{notice.title}</Link></h2>
            <p className="post-body">{notice.author}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default News;
