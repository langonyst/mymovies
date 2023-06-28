import { useState } from 'react';
import './styles.css';

function SearchComponent({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Buscar..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <span role="img" aria-label="Buscar">
          🔍
        </span>
      </button>
    </div>
  );
}

export default SearchComponent;
